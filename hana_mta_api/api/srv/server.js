const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const xsenv = require('@sap/xsenv');
const hdbext = require('@sap/hdbext');

xsenv.loadEnv();

const services = xsenv.getServices({
    hana: { tag: 'hana' }
});

app.use(hdbext.middleware(services.hana));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.get('/', function (req, res) {
    try {
        req.db.exec('SELECT * FROM "hana_mta_api.db::error"', function (err, results) {
            if (err) {
                res.type('text/plain').status(500).send('ERROR: ' + err.toString());
                return;
            }
            res.status(200).json(results);
        });
    } catch (error) {
        res.status(500).send(error);
    }    
});

app.get('/:id', function (req, res) {
    try {
        var sId = req.params.id || false;

        if (sId) {
            req.db.exec(`SELECT * FROM "hana_mta_api.db::error" WHERE "id" = '${sId}'`, function (err, aResultSet) {
                if (err) {
                    res.type('text/plain').status(500).send('ERROR: ' + err.toString());
                    return;
                }
                res.status(200).json(aResultSet);
            });
        } else {
            res.status(401).send('Bad Request');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/', function (req, res) {
    try {
        const oDate = new Date();

        var serrorNumber = req.body.errorNumber || false;
        var sObjectName = req.body.objectName || false;
        var sProcessId = req.body.processId || false;
        var sCreatedon = oDate.toISOString().split('T')[0] || false;
        var sErrorMessage = req.body.errorMessage || false;
    
        if (serrorNumber && sObjectName && sProcessId && sErrorMessage) {
            var sQuery = `INSERT INTO "hana_mta_api.db::error" VALUES (
                SYSUUID,
                '${serrorNumber}',
                '${sObjectName}',
                '${sProcessId}',
                '${sCreatedon}',
                '${sErrorMessage}'
            )`;
    
            req.db.exec(sQuery, function (err, affectedRows) {
                if (err) {
                    return console.error('Error:', err);
                }
                res.status(200).json({ "Status": "Success", "Affected rows": affectedRows });
            });
        } else {
            res.status(401).send('Bad Request');
        } 
    } catch (error) {
        res.status(500).send(error); 
    }    
});

app.put('/', function (req, res) {
    try {
        var sId = req.body.id || false;

        if (sId) {
            req.db.exec(`SELECT * FROM "hana_mta_api.db::error" WHERE "id" = '${sId}'`, function (err, aResultSet) {
                if (err) {
                    res.type('text/plain').status(500).send('ERROR: ' + err.toString());
                    return;
                }

                var sErrorNumber = req.body.errorNumber || aResultSet[0].errorNumber;
                var sObjectName = req.body.objectName || aResultSet[0].objectName;
                var sProcessId = req.body.processId || aResultSet[0].processId;
                var sErrorMessage = req.body.errorMessage || aResultSet[0].errorMessage;

                var sQuery = `UPDATE "hana_mta_api.db::error" SET 
                        "errorNumber" = '${sErrorNumber}',
                        "objectName" =  '${sObjectName}',
                        "processId" = '${sProcessId}',
                        "errorMessage" = '${sErrorMessage}'
                    WHERE "id" = '${sId}'
                `;

                req.db.exec(sQuery, function (err, affectedRows) {
                    if (err) {
                        return console.error('Error:', err);
                    }
                    res.status(200).json({ "Status": "Success", "Affected rows": affectedRows });
                });
            });
        } else {
            res.status(401).send('Bad Request');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

app.delete('/:id', function (req, res) {
    try {
        var sId = req.params.id || false;

        if (sId) {
            req.db.exec(`DELETE FROM "hana_mta_api.db::error" WHERE "id" = '${sId}'`, function (err, affectedRows) {
                if (err) {
                    res.type('text/plain').status(500).send('ERROR: ' + err.toString());
                    return;
                }
                res.status(200).json({ "Status": "Success", "Affected rows": affectedRows });
            });
        } else {
            res.status(401).send('Bad Request');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/test', function (req, res) {
    try {
        const oDate = new Date();

        var sId = req.body.id || false;
        var serrorNumber = req.body.errorNumber || false;
        var sObjectName = req.body.objectName || false;
        var sProcessId = req.body.processId || false;
        var sCreatedon = oDate.toISOString().split('T')[0] || false;
        var sErrorMessage = req.body.errorMessage || false;

        var oResponse = {
            sId: sId,
            serrorNumber: serrorNumber,
            sObjectName: sObjectName,
            sProcessId: sProcessId,
            sCreatedon: sCreatedon,
            sErrorMessage: sErrorMessage
        }

        res.status(200).json(oResponse);
    } catch (error) {
        res.status(500).send(error);
    }
});

const port = process.env.PORT || 5001;
app.listen(port, function () {
    console.info('Listening on http://localhost:' + port);
});