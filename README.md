<p align="center">
  <a href="#">
    <img src="https://cdn-icons-png.flaticon.com/512/627/627558.png" width="160" height="160" alt="" />
  </a>
</p>

<p align="center">HANA APIs 🚀</p>


## Overview
This repo provides some examples of basic API implementation on HANA Infrastructure, for the following scenarios:

- **HANA CLOUD - CAPM** - hana_capm_api
- **HANA XSA - MTA** - hana_mta_api
- **HANA XS - XSJS** - hana_mta_xs_api
- **HANA XS - CLASSIC** - hana_classic_api

**NOTE:** The vast majority of the tests were done using the Trial SAP BTP Account.

## How to use

### How to get the API definitions/endpoints and other relevant information
**Swagger Editor View**   
Past the content of the "openapi-XXX.yaml" file in the <a href="https://editor.swagger.io/#" target="_blank"> Swagger Editor </a>

### How to implement/deploy the API

### HANA CLOUD - CAPM - hana_capm_api:
**Prerequisites**
- SAP Account - BTP.
- HANA Instance - Cloud Infrastructure or Onprem.
- Business Application Studio - Cloud Infrastructure or Onprem.

**Build**  
Run the following command in your console at the root folder:
```bash
cds build 	
```
**Deploy**  
Run the following commands in your console at the root folder:
```bash
cds deploy --to hana
```

```bash
cf push --random-route
```

### HANA XSA - MTA - hana_mta_api:
**Prerequisites**
- SAP Account - BTP.
- HANA Instance - Cloud Infrastructure or Onprem.
- Business Application Studio - Cloud Infrastructure or Onprem.

**Build**  
Right click on the MTA file
Choose the "Build MTA Project"

**Deploy**  
Expand on the "mta_archives" folder 
Right click on the .mtar file
Choose the "Deploy MTA Archive"

### HANA XS - XSJS - hana_mta_xs_api:
**Prerequisites**
- SAP Account - BTP.
- HANA Instance - Cloud Infrastructure or Onprem.
- Business Application Studio - Cloud Infrastructure or Onprem.

**Build**  
Right click on the MTA file
Choose the "Build MTA Project"

**Deploy**  
Expand on the "mta_archives" folder 
Right click on the .mtar file
Choose the "Deploy MTA Archive"

### HANA XS - CLASSIC - hana_classic_api:
**Prerequisites**
- HANA Instance - Cloud Infrastructure or Onprem.
- HANA Studio.

**Build**  
Create all files in HANA Studio (Be aware of the file extensions) and change/adjust the "relative file path", "namespace" and "Schema" in the files below, according to your environment:  
- index.xsodata 
- Error.hdbdd
- ErrorLoader.hdbti

**Deploy**  
Activate the files

## Author

<a href="https://www.linkedin.com/in/filemomb/">
 <img style="border-radius: 50%;" src="https://avatars.services.sap.com/images/filemombarbosa.png" width="100px;" alt=""/>
 <br />
 <sub><b>Filemom Barbosa</b></sub></a> <a href="https://github.com/filemombarbosa title="Github">🚀</a>  <br /><br />

[![Sap Badge](https://img.shields.io/badge/-@filemombarbosa-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=sap&logoColor=white&link=https://twitter.com/filemombarbosa)](https://people.sap.com/filemombarbosa) 
[![Linkedin Badge](https://img.shields.io/badge/-Filemom-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/filemombarbosa/)](https://www.linkedin.com/in/filemomb/) 
[![Gmail Badge](https://img.shields.io/badge/-filemombarbosa@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:filemombarbosa@gmail.com)](mailto:filemombarbosa@gmail.com)