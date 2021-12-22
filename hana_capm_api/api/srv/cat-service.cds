using {hana_capm_api.db as hana_capm_api} from '../db/schema';

service CatalogService @(path : '/srv') {

    entity Error as
        select from hana_capm_api.Error {*};

};

annotate CatalogService.Error with @UI : {
    LineItem : [
        {Value : id,      Label : 'ID'},
        {Value : errorMessage,  Label : 'Error Message'}
    ]
};