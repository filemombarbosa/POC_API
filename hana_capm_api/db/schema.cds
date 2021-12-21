namespace hana_capm_api.db;

entity Error {
    key id           : String(32);
        errorNumber  : String(36);
        objectName   : String(50);
        processId    : Integer;
        createdon    : DateTime;
        errorMessage : String(5000);
};
