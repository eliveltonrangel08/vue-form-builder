// this demo contains normal form
const DEMO_FORM_DATA = {
  "formConfig": {
    "headline": "Create new Document",
    "subHeadline": "Before processing your document, you need to create a new one first",
    "isShowHeadline": true,
    "renderFormTag": true,
    "formActionURL": "",
    "formMethod": "POST"
  },
  "sections": {
    "section-8f514060-8f13-401a-a9c0-17125f6936d3": {
      "uniqueId": "section-8f514060-8f13-401a-a9c0-17125f6936d3",
      "headline": "Basic Information",
      "headlineAdditionalClass": "",
      "subHeadline": "Most basic info about a document",
      "subHeadlineAdditionalClass": "",
      "isShowHeadline": true,
      "sortOrder": 1,
      "type": "normal",
      "rows": [],
      "controls": ["control-c9d4df03-85de-4369-a9c6-86f49ae2e657", "control-2b5aeee2-4978-4d7f-ac10-805db59c962c", "control-51f745e6-60a8-417b-9f0f-042e7932b809", "control-8281d661-ed00-4d0e-94d9-6130c35389e8"]
    },
    "section-9927d7ee-d40a-4ee1-94cf-a764d85ec9a2": {
      "uniqueId": "section-9927d7ee-d40a-4ee1-94cf-a764d85ec9a2",
      "headline": "Processing Detail",
      "headlineAdditionalClass": "",
      "subHeadline": "How your document gonna be processed?",
      "subHeadlineAdditionalClass": "",
      "isShowHeadline": true,
      "sortOrder": 2,
      "type": "normal",
      "rows": [],
      "controls": ["control-a0a23ed2-b22f-4ba1-9f62-bd09ddf16bae", "control-4557e539-8c79-4822-b36c-5cf06463844f", "control-b7d049d5-8896-4f83-b39e-743c6d9d8b11"]
    },
    "section-6f5bc178-5848-421f-94f2-349e02c83aa0": {
      "uniqueId": "section-6f5bc178-5848-421f-94f2-349e02c83aa0",
      "headline": "Optional Detail",
      "headlineAdditionalClass": "",
      "subHeadline": "Optional detail about your Document",
      "subHeadlineAdditionalClass": "",
      "isShowHeadline": true,
      "sortOrder": 3,
      "type": "toggleable",
      "rows": [],
      "controls": ["control-5661c457-234e-47cb-ac25-f33d605cbbc3", "control-4bcfe7f4-e744-4097-a28b-b13a806f2525", "control-983748e1-eb1f-477d-8f67-b32131315f5d", "control-b578d6aa-6ae3-4edf-a42f-3b5b1c0d8f05"]
    },
    "section-9fe9a461-f3df-4765-abe2-4a74745b810e": {
      "uniqueId": "section-9fe9a461-f3df-4765-abe2-4a74745b810e",
      "headline": "Submit",
      "headlineAdditionalClass": "",
      "subHeadline": "",
      "subHeadlineAdditionalClass": "",
      "isShowHeadline": false,
      "sortOrder": 4,
      "type": "normal",
      "rows": [],
      "controls": ["control-ba5eb847-0129-45e7-933f-7d76a2e73bce"]
    }
  },
  "rows": {},
  "controls": {
    "control-c9d4df03-85de-4369-a9c6-86f49ae2e657": {
      "uniqueId": "control-c9d4df03-85de-4369-a9c6-86f49ae2e657",
      "type": "input",
      "name": "name",
      "label": "Title",
      "subLabel": "",
      "isShowLabel": true,
      "placeholderText": "",
      "containerClass": "col-md-6",
      "additionalContainerClass": "",
      "additionalFieldClass": "",
      "additionalLabelClass": "",
      "defaultValue": "Seth Phat",
      "validations": []
    },
    "control-2b5aeee2-4978-4d7f-ac10-805db59c962c": {
      "uniqueId": "control-2b5aeee2-4978-4d7f-ac10-805db59c962c",
      "type": "input",
      "name": "brief-description",
      "label": "Brief Description",
      "subLabel": "",
      "isShowLabel": true,
      "placeholderText": "What is this document?",
      "containerClass": "col-md-6",
      "additionalContainerClass": "",
      "additionalFieldClass": "",
      "additionalLabelClass": "",
      "defaultValue": "",
      "validations": [{"ruleType": "required", "errorMessage": "This field is required", "additionalValue": ""}]
    },
    "control-51f745e6-60a8-417b-9f0f-042e7932b809": {
      "uniqueId": "control-51f745e6-60a8-417b-9f0f-042e7932b809",
      "type": "text",
      "name": "long-description",
      "label": "Long Description",
      "subLabel": "",
      "isShowLabel": true,
      "placeholderText": "More detail about this document.",
      "containerClass": "col-md-12",
      "additionalContainerClass": "",
      "additionalFieldClass": "",
      "additionalLabelClass": "",
      "defaultValue": "",
      "validations": [],
      "rows": 6
    },
    "control-a0a23ed2-b22f-4ba1-9f62-bd09ddf16bae": {
      "uniqueId": "control-a0a23ed2-b22f-4ba1-9f62-bd09ddf16bae",
      "type": "checkbox",
      "name": "doc_props",
      "label": "Document's Properties",
      "subLabel": "",
      "isShowLabel": true,
      "placeholderText": "",
      "containerClass": "col-md-4",
      "additionalContainerClass": "",
      "additionalFieldClass": "",
      "additionalLabelClass": "",
      "defaultValue": "",
      "validations": [{
        "ruleType": "required",
        "errorMessage": "This field is required",
        "additionalValue": ""
      }, {"ruleType": "min", "errorMessage": "Minimum value for this field is :min", "additionalValue": "1"}],
      "displayMode": "bothSide",
      "position": "left",
      "items": [{"value": "1", "text": "Read"}, {"value": "2", "text": "Write"}, {"value": "3", "text": "Delete"}]
    },
    "control-4557e539-8c79-4822-b36c-5cf06463844f": {
      "uniqueId": "control-4557e539-8c79-4822-b36c-5cf06463844f",
      "type": "radio",
      "name": "is_deletable",
      "label": "Deletable?",
      "subLabel": "",
      "isShowLabel": true,
      "placeholderText": "",
      "containerClass": "col-md-4",
      "additionalContainerClass": "",
      "additionalFieldClass": "",
      "additionalLabelClass": "",
      "defaultValue": "",
      "validations": [],
      "displayMode": "bothSide",
      "position": "left",
      "items": [{"value": "1", "text": "Yes"}, {"value": "0", "text": "No"}]
    },
    "control-b7d049d5-8896-4f83-b39e-743c6d9d8b11": {
      "uniqueId": "control-b7d049d5-8896-4f83-b39e-743c6d9d8b11",
      "type": "emptyBlock",
      "name": "",
      "label": "Empty Block",
      "subLabel": "",
      "isShowLabel": false,
      "placeholderText": "",
      "containerClass": "col-md-4",
      "additionalContainerClass": "",
      "additionalFieldClass": "",
      "additionalLabelClass": "",
      "defaultValue": "",
      "validations": []
    },
    "control-5661c457-234e-47cb-ac25-f33d605cbbc3": {
      "uniqueId": "control-5661c457-234e-47cb-ac25-f33d605cbbc3",
      "type": "dropDown",
      "name": "doc_processor",
      "label": "Document Processor",
      "subLabel": "",
      "isShowLabel": true,
      "placeholderText": "Choose a processor",
      "containerClass": "col-md-6",
      "additionalContainerClass": "",
      "additionalFieldClass": "",
      "additionalLabelClass": "",
      "defaultValue": "",
      "validations": [],
      "dataMode": "list",
      "multiple": false,
      "items": [{"value": "ap", "text": "Account Payable"}, {"value": "po", "text": "Purchase Order"}, {
        "value": "inv",
        "text": "Invoice"
      }],
      "apiURL": "",
      "apiTextKey": "text",
      "apiValueKey": "value"
    },
    "control-4bcfe7f4-e744-4097-a28b-b13a806f2525": {
      "uniqueId": "control-4bcfe7f4-e744-4097-a28b-b13a806f2525",
      "type": "number",
      "name": "total_value",
      "label": "Total Value",
      "subLabel": "",
      "isShowLabel": true,
      "placeholderText": "",
      "containerClass": "col-md-6",
      "additionalContainerClass": "",
      "additionalFieldClass": "",
      "additionalLabelClass": "",
      "defaultValue": "",
      "validations": [{
        "ruleType": "required",
        "errorMessage": "This field is required",
        "additionalValue": ""
      }, {"ruleType": "max", "errorMessage": "Total cost must below :max (dollar)", "additionalValue": "50000"}],
      "isReal": true,
      "decimalPlace": 2
    },
    "control-983748e1-eb1f-477d-8f67-b32131315f5d": {
      "uniqueId": "control-983748e1-eb1f-477d-8f67-b32131315f5d",
      "type": "label",
      "name": "",
      "label": "Permissions",
      "subLabel": "",
      "isShowLabel": false,
      "placeholderText": "",
      "containerClass": "col-md-6",
      "additionalContainerClass": "text-right",
      "additionalFieldClass": "",
      "additionalLabelClass": "",
      "defaultValue": "",
      "validations": [],
      "forAttribute": null
    },
    "control-b578d6aa-6ae3-4edf-a42f-3b5b1c0d8f05": {
      "uniqueId": "control-b578d6aa-6ae3-4edf-a42f-3b5b1c0d8f05",
      "type": "checkbox",
      "name": "permissions",
      "label": "",
      "subLabel": "",
      "isShowLabel": false,
      "placeholderText": "",
      "containerClass": "col-md-6",
      "additionalContainerClass": "",
      "additionalFieldClass": "",
      "additionalLabelClass": "",
      "defaultValue": "xx",
      "validations": [],
      "displayMode": "next",
      "position": "left",
      "items": [{"value": "xa", "text": "A.I Processing"}, {"value": "xx", "text": "Human Processing"}, {
        "value": "xb",
        "text": "No-body Processing"
      }, {"value": "xc", "text": "Leave it there and somehow its processed"}]
    },
    "control-ba5eb847-0129-45e7-933f-7d76a2e73bce": {
      "uniqueId": "control-ba5eb847-0129-45e7-933f-7d76a2e73bce",
      "type": "textBlock",
      "name": "",
      "label": "Simple text block note",
      "subLabel": "",
      "isShowLabel": true,
      "placeholderText": "",
      "containerClass": "col-md-12",
      "additionalContainerClass": "",
      "additionalFieldClass": "",
      "additionalLabelClass": "",
      "defaultValue": "",
      "validations": [],
      "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    "control-8281d661-ed00-4d0e-94d9-6130c35389e8": {
      "uniqueId": "control-8281d661-ed00-4d0e-94d9-6130c35389e8",
      "type": "input",
      "name": "user_email",
      "label": "Final Process User",
      "subLabel": "",
      "isShowLabel": true,
      "placeholderText": "Email of Final Processor",
      "containerClass": "col-md-6",
      "additionalContainerClass": "",
      "additionalFieldClass": "",
      "additionalLabelClass": "",
      "defaultValue": "",
      "validations": [{
        "ruleType": "required",
        "errorMessage": "This field is required",
        "additionalValue": ""
      }, {"ruleType": "isEmail", "errorMessage": "Wrong email address format", "additionalValue": ""}]
    }
  }
}

// this demo contains tab section
//const DEMO_FORM_DATA = {"formConfig":{"headline":"","subHeadline":"","isShowHeadline":false,"renderFormTag":false,"formActionURL":"","formMethod":"POST"},"sections":{"section-1c49c507-55dd-4074-9c7f-32527aaa30c7":{"uniqueId":"section-1c49c507-55dd-4074-9c7f-32527aaa30c7","headline":"New Section","headlineAdditionalClass":"","subHeadline":"This is the sub-headline of the new section","subHeadlineAdditionalClass":"","isShowHeadline":true,"sortOrder":1,"type":"tab","rows":["row-0bbc4210-a3dc-4739-8259-830117c23c08","row-b64a4749-5eb4-4433-af07-1b197fae4ce8"],"controls":[]}},"rows":{"row-0bbc4210-a3dc-4739-8259-830117c23c08":{"uniqueId":"row-0bbc4210-a3dc-4739-8259-830117c23c08","additionalClass":"","type":"tabRow","sortOrder":0,"controls":["control-de4d9538-e1b1-4f99-b035-01122c1759bf","control-c624fc97-0769-4a41-a30c-cffcc8871acb"],"extendData":{"tabName":"Basic","defaultChecked":true}},"row-b64a4749-5eb4-4433-af07-1b197fae4ce8":{"uniqueId":"row-b64a4749-5eb4-4433-af07-1b197fae4ce8","additionalClass":"","type":"tabRow","sortOrder":0,"controls":["control-80c05507-3f97-457d-aa0a-e5e3e6b6dca2","control-80fc15f8-7d10-4b7a-be18-43b8aaa319da"],"extendData":{"tabName":"Advanced","defaultChecked":false}}},"controls":{"control-de4d9538-e1b1-4f99-b035-01122c1759bf":{"uniqueId":"control-de4d9538-e1b1-4f99-b035-01122c1759bf","type":"input","name":"","label":"Input Field","subLabel":"","isShowLabel":true,"placeholderText":"","containerClass":"col-md-4 md-layout-item md-size-33","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[]},"control-c624fc97-0769-4a41-a30c-cffcc8871acb":{"uniqueId":"control-c624fc97-0769-4a41-a30c-cffcc8871acb","type":"number","name":"","label":"Number Input Field","subLabel":"","isShowLabel":true,"placeholderText":"","containerClass":"col-md-4 md-layout-item md-size-33","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"isReal":false,"decimalPlace":1},"control-80c05507-3f97-457d-aa0a-e5e3e6b6dca2":{"uniqueId":"control-80c05507-3f97-457d-aa0a-e5e3e6b6dca2","type":"date","name":"","label":"Date Picker","subLabel":"","isShowLabel":true,"placeholderText":"","containerClass":"col-md-4 md-layout-item md-size-33","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"format":"DD/MM/YYYY","firstDay":1,"numberOfMonths":1,"numberOfColumns":1,"minDate":null,"maxDate":null,"singleMode":true,"minDays":0,"maxDays":0,"returnType":"format"},"control-80fc15f8-7d10-4b7a-be18-43b8aaa319da":{"uniqueId":"control-80fc15f8-7d10-4b7a-be18-43b8aaa319da","type":"checkbox","name":"","label":"Checkbox List","subLabel":"","isShowLabel":true,"placeholderText":"","containerClass":"col-md-4 md-layout-item md-size-33","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"displayMode":"line","position":"left","items":[{"value":"1","text":"dsfafdsf"},{"value":"12","text":"dsafasdf"}]}}}

// this demo contains a field with regex validation
//const DEMO_FORM_DATA = {"formConfig":{"headline":"","subHeadline":"","isShowHeadline":false,"renderFormTag":false,"formActionURL":"","formMethod":"POST"},"sections":{"section-11faa0c9-564f-49cf-94e3-f4a4978b3fb6":{"uniqueId":"section-11faa0c9-564f-49cf-94e3-f4a4978b3fb6","headline":"New Section","headlineAdditionalClass":"","subHeadline":"This is the sub-headline of the new section","subHeadlineAdditionalClass":"","isShowHeadline":true,"sortOrder":1,"type":"normal","rows":[],"controls":["control-47dea3ac-b79e-4ab5-bdf2-51e2ad39916c","control-820b1477-7533-4f8c-a6d6-1fc35b6ae0e9"]}},"rows":{},"controls":{"control-820b1477-7533-4f8c-a6d6-1fc35b6ae0e9":{"uniqueId":"control-820b1477-7533-4f8c-a6d6-1fc35b6ae0e9","type":"button","name":"","label":"Validation now","subLabel":"","isShowLabel":false,"placeholderText":"","containerClass":"col-md-12 md-layout-item md-size-100","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"buttonClass":"btn btn-primary md-button md-raised md-primary md-theme-default","buttonType":"button","emitEventCode":"","emitEventData":"","isRunValidation":true},"control-47dea3ac-b79e-4ab5-bdf2-51e2ad39916c":{"uniqueId":"control-47dea3ac-b79e-4ab5-bdf2-51e2ad39916c","type":"input","name":"number","label":"Number but using Text Field","subLabel":"","isShowLabel":true,"placeholderText":"","containerClass":"col-md-4 md-layout-item md-size-33","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":"This field is required","additionalValue":""},{"ruleType":"regex","errorMessage":"Must be number only","additionalValue":"^[0-9]+$|g"}]}}}

const DEMO_FORM_DATA_2 = {"formConfig":{"headline":"","subHeadline":"","isShowHeadline":false,"renderFormTag":false,"formActionURL":"","formMethod":"POST","enableServerSideValidation":false,"serverSideValidationEndpoint":""},"sections":{"section-6ff24342-e5b7-4c71-bb7d-192dbbea9b33":{"uniqueId":"section-6ff24342-e5b7-4c71-bb7d-192dbbea9b33","headline":"INFORMAÇÕES DA DECLARAÇÃO DE ÓBITO","headlineAdditionalClass":"","subHeadline":"ORIGINAL","subHeadlineAdditionalClass":"","isShowHeadline":true,"hideOnReport":false,"sortOrder":1,"type":"toggleable","rows":[],"controls":["control-639dddd0-03a3-4f98-9be7-e5a8b22a1bb2","control-f25d5a0f-9dc9-4372-bd5b-6a6a2ead184a","control-2da6941b-c360-41f0-8044-c936caa9ab4a","control-80d77448-ec48-4a38-b4f6-5851954dc12d","control-08851e90-1867-48f0-8932-60ddcd60cd6f","control-281c03c9-0088-4323-a3f9-87086975640e","control-1d70bbc9-8960-4e77-9699-99309e8b2074","control-da98fe04-7b16-41a1-8d6e-cbe762e3f774","control-52d886f0-ae5e-452f-82e3-98abcbdcd9e1","control-a65a2b5b-ef1e-40c8-b6a8-26216273e261","control-16b4dae8-87b8-463d-9445-c437efd0b863"]},"section-1fcc398b-61bd-46b5-b1d6-508eb167d00c":{"uniqueId":"section-1fcc398b-61bd-46b5-b1d6-508eb167d00c","headline":"DADOS DO ATENDIMENTO","headlineAdditionalClass":"","subHeadline":"","subHeadlineAdditionalClass":"","isShowHeadline":true,"hideOnReport":false,"sortOrder":2,"type":"toggleable","rows":[],"controls":["control-70fe7fcb-3f91-4ff6-90ec-1dd7a0979bb1","control-fe023620-4017-4f60-a5e0-b7cab738b1e5","control-d29bb8ac-071a-44b3-8781-92f6ba697336","control-b61ba846-be67-41e0-a2eb-77884cefe79b","control-d6e64e84-583c-40e3-938e-a8a4a6a49d6e","control-e809f5c6-87da-4d58-8b13-03adcd6d8f14","control-a23e8108-69c3-4e40-a680-5d5a95755799","control-cb9cd3ad-390a-4c99-a9af-0ca50a5d6b9f","control-f8d3a9b7-bdee-49d0-bc98-c48d993c61cd","control-1659802d-c6fd-4528-968f-0c3e68dfe000","control-48ec81b7-f7f9-493a-a225-7480ed3f8356","control-5a350b19-d671-4f7e-8bc0-a4ba8fe6d0b9"]},"section-82d01cff-f106-430f-b499-57a013455c1f":{"uniqueId":"section-82d01cff-f106-430f-b499-57a013455c1f","headline":"DECLARAÇÃO DE ÓBITO/DEFINIÇÃO DA CAUSA BÁSICA","headlineAdditionalClass":"","subHeadline":"","subHeadlineAdditionalClass":"","isShowHeadline":true,"hideOnReport":false,"sortOrder":3,"type":"toggleable","rows":[],"controls":["control-fc13d3fb-487d-436c-abb5-fb28a9ca7e21","control-f7ddacc5-5fb7-462f-a270-c6e002d4dced","control-3e036cdb-d887-4f36-ba9b-65ab9fa887a4","control-8870b3ea-a61d-4d71-95f9-f54094997c88"]},"section-072db185-3bc5-4ad3-a73a-0903564e6bd2":{"uniqueId":"section-072db185-3bc5-4ad3-a73a-0903564e6bd2","headline":"INVESTIGAÇÃO DA CAUSA BÁSICA DE ÓBITO - COMISSÃO DE REVISÃO DE ÓBITOS","headlineAdditionalClass":"","subHeadline":"","subHeadlineAdditionalClass":"","isShowHeadline":true,"hideOnReport":false,"sortOrder":4,"type":"toggleable","rows":[],"controls":["control-4491fe9f-9983-4626-ab51-fee86e452ae4","control-eb845fbf-4144-4066-bedc-a2e793307856","control-b99e5d97-3c0b-461f-af5d-1b98a10a69de"]},"section-c646a6ed-9206-474d-b18a-6217b5bf36b9":{"uniqueId":"section-c646a6ed-9206-474d-b18a-6217b5bf36b9","headline":"INFORMAÇÕES PREENCHIDAS PELA GERÊNCIA DE INFORMAÇÃO E ANÁLISE DE SITUAÇÃO EM SAÚDE (GIASS)","headlineAdditionalClass":"","subHeadline":"","subHeadlineAdditionalClass":"","isShowHeadline":true,"hideOnReport":true,"sortOrder":5,"type":"toggleable","rows":[],"controls":["control-3301df94-4078-482a-83e1-5e17183bc635","control-aca58112-ebd3-40dd-89d2-25a88b870048","control-b42d11f2-402c-4da8-b4e0-36d8dd41f4bf","control-7e14a8cb-528b-46b5-afc2-ba7e4f6b1c74","control-59c93f51-59de-49be-8647-0d291f15b79a"]}},"rows":{},"controls":{"control-f25d5a0f-9dc9-4372-bd5b-6a6a2ead184a":{"uniqueId":"control-f25d5a0f-9dc9-4372-bd5b-6a6a2ead184a","type":"input","name":"NUMERODO","label":"Número da Declaração de Óbito","subLabel":"Número da declaração de óbito (8 números)","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"min","errorMessage":"Digite os 8 primeiros dígitos da DO ","additionalValue":"8"}],"hasMask":true,"mask":"########"},"control-2da6941b-c360-41f0-8044-c936caa9ab4a":{"uniqueId":"control-2da6941b-c360-41f0-8044-c936caa9ab4a","type":"input","name":"DTOBITO","label":"Data do óbito","subLabel":"Campo 2 da D.O - Data do óbito - Dia/M ês/Ano 99/99/9999","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":"Preencha a data do óbito","additionalValue":""}],"disableByRoleSetting":false,"format":"DD/MM/YYYY","hasMask":true,"mask":"##/##/####","singleMode":true,"readOnly":true},"control-80d77448-ec48-4a38-b4f6-5851954dc12d":{"uniqueId":"control-80d77448-ec48-4a38-b4f6-5851954dc12d","type":"input","name":"NOME","label":"Nome","subLabel":"Campo 5 da D.O - Nome comp leto da pessoa","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":true,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":"Preencha o nome completo da pessoa que foi a óbito","additionalValue":""}],"hasMask":true,"mask":""},"control-08851e90-1867-48f0-8932-60ddcd60cd6f":{"uniqueId":"control-08851e90-1867-48f0-8932-60ddcd60cd6f","type":"input","name":"NOMEMAE","label":"Nome da mãe","subLabel":"Campo 7 da D.O - Nome da mãe da pe ssoa","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":true,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":"Digite o nome completo da mãe da pessoa","additionalValue":""}],"hasMask":true,"mask":""},"control-281c03c9-0088-4323-a3f9-87086975640e":{"uniqueId":"control-281c03c9-0088-4323-a3f9-87086975640e","type":"input","name":"DTNASC","label":"Data de Nascimento","subLabel":"Campo 8 da D.O - Data de nascimento da pessoa - Dia/Mês/Ano 99/99/9999","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":"Digite a data de nascimento da pessoa","additionalValue":""}],"disableByRoleSetting":false,"format":"DD/MM/YYYY","hasMask":true,"mask":"##/##/####","singleMode":true,"readOnly":true},"control-1d70bbc9-8960-4e77-9699-99309e8b2074":{"uniqueId":"control-1d70bbc9-8960-4e77-9699-99309e8b2074","type":"text","name":"ENDRES","label":"Endereço residencial","subLabel":"Campo 15 - Endereço residencial","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":true,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":"Digite o endereço residencial da pessoa","additionalValue":""}],"rows":3},"control-da98fe04-7b16-41a1-8d6e-cbe762e3f774":{"uniqueId":"control-da98fe04-7b16-41a1-8d6e-cbe762e3f774","type":"dropDown","name":"UFMUNRES","label":"Município e UF de residência","subLabel":"Campo 19 da D.O - Unidade Federativa de residência","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":"Escolha a Unidade Federativa de residência","additionalValue":""}],"items":[],"external_data_id":6,"field_text":"UF-Municipio","field_value":"UF-Municipio","field_hint":"Nome_UF\r","disableByRoleSetting":false},"control-52d886f0-ae5e-452f-82e3-98abcbdcd9e1":{"uniqueId":"control-52d886f0-ae5e-452f-82e3-98abcbdcd9e1","type":"dropDown","name":"RA","label":"Região Administrativa de residência","subLabel":"Região Administrativa de Residência","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":"Escolha a Região Administrativa de residência","additionalValue":""}],"items":[],"external_data_id":5,"field_text":"CIDADE\r","field_value":"CIDADE\r","field_hint":"CIDADE\r","disableByRoleSetting":false},"control-a65a2b5b-ef1e-40c8-b6a8-26216273e261":{"uniqueId":"control-a65a2b5b-ef1e-40c8-b6a8-26216273e261","type":"input","name":"OCUP","label":"Profissão","subLabel":"Campo 14 da DO -profissão","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":true,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":"Digite a profissão da pessoa","additionalValue":""}]},"control-16b4dae8-87b8-463d-9445-c437efd0b863":{"uniqueId":"control-16b4dae8-87b8-463d-9445-c437efd0b863","type":"radio","name":"SEXO","label":"Sexo","subLabel":"Campo 10 da D.O - Informar o sexo da pessoa","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":"Escolha o sexo biológico da pessoa","additionalValue":""}],"displayMode":"line","position":"left","items":[{"value":"MASCULINO","text":"Masculino"},{"value":"FEMININO","text":"Feminino"}]},"control-fe023620-4017-4f60-a5e0-b7cab738b1e5":{"uniqueId":"control-fe023620-4017-4f60-a5e0-b7cab738b1e5","type":"input","name":"DTINTERN","label":"Data da internação","subLabel":"Data que a pessoa foi internada","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":"Preencha a data da internação","additionalValue":""}],"disableByRoleSetting":false,"format":"DD/MM/YYYY","hasMask":true,"mask":"##/##/####","singleMode":true,"readOnly":true},"control-d29bb8ac-071a-44b3-8781-92f6ba697336":{"uniqueId":"control-d29bb8ac-071a-44b3-8781-92f6ba697336","type":"checkbox","name":"PCOMORB","label":"Possui comorbidades?","subLabel":"Informar as comorbidades pré-existentes","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":"Clique em uma das opções.","additionalValue":""}],"displayMode":"line","position":"left","items":[{"value":"DIABETESMELLITUSINSULINODEPENDENTE","text":"Diabetes Mellitus Insulino Dependente"},{"value":"DIABETESMELLITUSINSULINONAODEPENDENTE","text":"Diabetes Mellitus Não Insulino Dependente"},{"value":"HIPERTENSAOARTERIALSISTEMATICA","text":"Hipertensão Arterial Sistêmica"},{"value":"CARDIOPATIA","text":"Cardiopatia (especifique no próximo item)"},{"value":"OUTRASDOENCASIMUNOSSUPRESSIVAS","text":"Outras doenças imunossupressivas (especifique no próximo item)"},{"value":"DOENCARESPIRATORIA","text":"Doença Respiratória (especifique no próximo item)"},{"value":"NEOPLASIAEMTRATAMENTO","text":"Neoplasia em tratamento (especifique no próximo item)"},{"value":"TABAGISMO","text":"Tabagismo"},{"value":"OBESIDADE","text":"Obesidade"},{"value":"OUTRASCOMORBIDADES","text":"Outras comorbidades (especifique no próximo item)"},{"value":"SEMCOMORBIDADE","text":"Sem comorbidade"},{"value":"SEMINFORMACAO","text":"Sem informação"}]},"control-b61ba846-be67-41e0-a2eb-77884cefe79b":{"uniqueId":"control-b61ba846-be67-41e0-a2eb-77884cefe79b","type":"text","name":"COMORB","label":"Qual comorbidade ?","subLabel":"Descreva a comorbidade pré-existente, caso e xista.","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"rows":3},"control-70fe7fcb-3f91-4ff6-90ec-1dd7a0979bb1":{"uniqueId":"control-70fe7fcb-3f91-4ff6-90ec-1dd7a0979bb1","type":"radio","name":"TPRONT","label":"Tem prontuário?","subLabel":"","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":"Informe se a pessoa tem prontuário.","additionalValue":""}],"displayMode":"line","position":"left","items":[{"value":"SIM","text":"Sim"},{"value":"NAO","text":"Não"},{"value":"IGNORADO","text":"Ignorado"}]},"control-d6e64e84-583c-40e3-938e-a8a4a6a49d6e":{"uniqueId":"control-d6e64e84-583c-40e3-938e-a8a4a6a49d6e","type":"text","name":"RESUMO","label":"Resumo dos dados colhidos no prontuário","subLabel":"Informações sobre Hipótese de Diagnóstico","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-12 md-layout-item md-size-100","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":"Preencha o resumo dos dados colhidos em prontuário.","additionalValue":""}],"rows":6},"control-e809f5c6-87da-4d58-8b13-03adcd6d8f14":{"uniqueId":"control-e809f5c6-87da-4d58-8b13-03adcd6d8f14","type":"radio","name":"SETOROB","label":"Qual setor ocorreu o óbito?","subLabel":"Marque o setor da unidade de saúde que ocorreu o óbi to.","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":"Informe o setor que ocorreu o óbito","additionalValue":""}],"displayMode":"line","position":"left","items":[{"value":"UNIDADEDETERAPIAINTENSIVASEMIINTENSIVA","text":"Unidade de Terapia Intensiva / semi-intensiva"},{"value":"EMERGENCIA","text":"Emergência"},{"value":"UNIDADEDEINTERNACAO","text":"Unidade de internação"},{"value":"DOMICILIOACOMPANHADOAPELONRADDOHOSPITAL","text":"Domicílio - acompanhado (a)  pelo NRAD do hospital"},{"value":"DOMICILIOACOMPANHADOPORSERVICODEHOMECARE","text":"Domicílio - acompanhado por serviço de Home Care"},{"value":"OUTROLOCAL","text":"Outro local"}]},"control-cb9cd3ad-390a-4c99-a9af-0ca50a5d6b9f":{"uniqueId":"control-cb9cd3ad-390a-4c99-a9af-0ca50a5d6b9f","type":"radio","name":"EVENTMEC","label":"Estava em ventilação mecânica?","subLabel":"A pessoa depende do ventilador mecânico para respirar?","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":"Informe  se a pessoa estava em ventilação mecânica","additionalValue":""}],"displayMode":"line","position":"left","items":[{"value":"SIM","text":"Sim"},{"value":"NAO","text":"Não"},{"value":"IGNORADO","text":"Ignorado"}]},"control-fc13d3fb-487d-436c-abb5-fb28a9ca7e21":{"uniqueId":"control-fc13d3fb-487d-436c-abb5-fb28a9ca7e21","type":"input","name":"ANEXDO","label":"Declaração de óbito digitalizada (via rosa ou branca -preferencialmente branca)","subLabel":"Anexar declaração de óbito em PDF - tamanho máximo 500 kb","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":"É obrigatório anexar a Declaração de Óbito em PDF","additionalValue":""}],"maxSize":"500","allowedExtension":"application/pdf","disableByRoleSetting":false},"control-f7ddacc5-5fb7-462f-a270-c6e002d4dced":{"uniqueId":"control-f7ddacc5-5fb7-462f-a270-c6e002d4dced","type":"checkbox","name":"CBDEFP","label":"Causa de óbito foi definida por:","subLabel":"Pode marcar mais de uma opção","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":"Marque um dos itens da lista","additionalValue":""}],"displayMode":"line","position":"left","items":[{"value":"HISTORIACLINICA","text":"História Clínica"},{"value":"EXAMESLABORATORIAIS","text":"Exames Laboratoriais"},{"value":"EXAMEDEIMAGEM","text":"Exame de imagem"},{"value":"HISTOPATOLOGICO","text":"Histopatológico"},{"value":"NECROPSIA","text":"Necrópsia"},{"value":"OUTROS","text":"Outros"},{"value":"IGNORADO","text":"Ignorado"}]},"control-3e036cdb-d887-4f36-ba9b-65ab9fa887a4":{"uniqueId":"control-3e036cdb-d887-4f36-ba9b-65ab9fa887a4","type":"text","name":"REXAME","label":"Quais foram os resultados dos exames realizados?","subLabel":"Descreva resumidamente o resultado dos exames e/ou laudos de imagem realizados, incluindo resultado de painel viral, se houver.","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-12 md-layout-item md-size-100","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":"Informe os resultados dos exames","additionalValue":""}],"rows":5},"control-8870b3ea-a61d-4d71-95f9-f54094997c88":{"uniqueId":"control-8870b3ea-a61d-4d71-95f9-f54094997c88","type":"input","name":"ANEXEXC","label":"Anexar laudos e resultados de exames para os casos suspeitos ou confirmados de COVID-19","subLabel":"Anexar em um único arquivo em PDF os laudos de tomografia e resultados de exames laboratoriais para os casos suspeitos ou confirmados de COVID-19 - máximo de 800 kb","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"maxSize":"800","allowedExtension":"application/pdf","disableByRoleSetting":false},"control-4491fe9f-9983-4626-ab51-fee86e452ae4":{"uniqueId":"control-4491fe9f-9983-4626-ab51-fee86e452ae4","type":"dropDown","name":"CBCRO","label":"Causa básica de óbito definida pela Comissão de Revisão de Óbitos","subLabel":"Informe qual é a causa básica de óbito definida pela CRO após investigação","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":"Informe a causa básica definida pela CRO","additionalValue":""}],"items":[],"external_data_id":8,"field_text":"codigocid\r","field_value":"codigocid\r","field_hint":"REF","disableByRoleSetting":false},"control-eb845fbf-4144-4066-bedc-a2e793307856":{"uniqueId":"control-eb845fbf-4144-4066-bedc-a2e793307856","type":"radio","name":"INVCROCON","label":"A unidade concluiu a investigação?","subLabel":"Informar se a investigação foi concluída pela unidade de saúde.","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":" Escolha uma das opções","additionalValue":""}],"displayMode":"line","position":"left","items":[{"value":"SIM","text":"Sim"},{"value":"NAO","text":"Não"}]},"control-b99e5d97-3c0b-461f-af5d-1b98a10a69de":{"uniqueId":"control-b99e5d97-3c0b-461f-af5d-1b98a10a69de","type":"text","name":"COMCRO","label":"Comentários da equipe responsável pela investigação do óbito","subLabel":"Comentários adicionais (se necessário) realizados pela equipe responsável pela investigação do óbito para a equipe de supervisão da investigação (GIASS)","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-12 md-layout-item md-size-100","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"rows":3},"control-3301df94-4078-482a-83e1-5e17183bc635":{"uniqueId":"control-3301df94-4078-482a-83e1-5e17183bc635","type":"input","name":"DTAVAGIASS","label":"Data de avaliação da equipe GIASS","subLabel":"","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"disableByRoleSetting":false,"format":"DD/MM/YYYY","hasMask":true,"mask":"##/##/####","singleMode":true,"readOnly":true},"control-aca58112-ebd3-40dd-89d2-25a88b870048":{"uniqueId":"control-aca58112-ebd3-40dd-89d2-25a88b870048","type":"checkbox","name":"ATUSIM","label":"Atualizado no Sistema de Informação sobre Mortalidade","subLabel":"Uso exclusivo equipe GIASS","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"displayMode":"line","position":"left","items":[{"value":"DIGITADO","text":"Digitado"},{"value":"INVESTIGADO","text":"Investigado"}]},"control-b42d11f2-402c-4da8-b4e0-36d8dd41f4bf":{"uniqueId":"control-b42d11f2-402c-4da8-b4e0-36d8dd41f4bf","type":"dropDown","name":"CBGIASS","label":"Causa básica definida pela equipe da GIASS","subLabel":"Uso exclusivo equipe GIASS","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"items":[],"external_data_id":9,"field_text":"codigocid\r","field_value":"codigocid\r","field_hint":"REF","disableByRoleSetting":false},"control-7e14a8cb-528b-46b5-afc2-ba7e4f6b1c74":{"uniqueId":"control-7e14a8cb-528b-46b5-afc2-ba7e4f6b1c74","type":"radio","name":"INVGIASSCO","label":"Investigação concluída pela GIASS","subLabel":"Uso exclusivo equipe GIASS","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"displayMode":"line","position":"left","items":[{"value":"AGUARDANDORESPOSTADACOMISSAO","text":"Aguardando resposta da comissão"},{"value":"EMAVALIACAOPELAEQUIPEDAGIASS","text":"Em avaliação pela equipe da GIASS"},{"value":"SIM","text":"Sim"}]},"control-59c93f51-59de-49be-8647-0d291f15b79a":{"uniqueId":"control-59c93f51-59de-49be-8647-0d291f15b79a","type":"input","name":"COMGIASS","label":"Comentários equipe GIASS","subLabel":"Comentários sobre a definição da investigação pela equipe GIASS","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-12 md-layout-item md-size-100","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"default_value":"","hasMask":false,"mask":null,"hasDefaultValue":false,"defaultValueKey":null,"disableByRoleSetting":false},"control-f8d3a9b7-bdee-49d0-bc98-c48d993c61cd":{"uniqueId":"control-f8d3a9b7-bdee-49d0-bc98-c48d993c61cd","type":"dropDown","name":"VACINA","label":"Recebeu vacina para COVID-19?","subLabel":"","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[{"ruleType":"required","errorMessage":"Você deve informar se a pessoa recebeu a vacina","additionalValue":""}],"dataMode":"list","multiple":false,"items":[{"value":"","text":""},{"value":"APENAS1DOSESINOVAC","text":"Apenas 1ª dose (Sinovac/Coronavac/Butantan)"},{"value":"2DOSESSINOVAC","text":"2 doses (Sinovac/Coronavac/Butantan)"},{"value":"APENAS1DOSECOVISHIELD","text":"Apenas 1ª dose (Covishield/AstraZeneca/Oxford/Fiocruz)"},{"value":"2DOSESCOVISHIELD","text":"2 doses (Covishield/AstraZeneca/Oxford/Fiocruz)"},{"value":"APENAS1DOSECOMIRNATY","text":"Apenas 1ª dose (Comirnaty/Pfizer)"},{"value":"2DOSESCOMINARTY","text":"2 doses (Comirnaty/Pfizer)"},{"value":"APENAS1DOSEOUTRA","text":"Apenas 1ª dose (outra)"},{"value":"2DOSESOUTRA","text":"2 doses (outra)"},{"value":"NAORECEBEUNENHUMADOSEDEVACINA","text":"Não recebeu nenhuma dose de vacina."},{"value":"SEMINFORMACOESSOBREUSODEVACINA","text":"Sem informações sobre uso de vacina."}],"apiURL":"","apiTextKey":"text","apiValueKey":"value"},"control-48ec81b7-f7f9-493a-a225-7480ed3f8356":{"uniqueId":"control-48ec81b7-f7f9-493a-a225-7480ed3f8356","type":"input","name":"VAC1DOS","label":"Data da 1ª dose:","subLabel":"","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"disableByRoleSetting":false,"format":"DD/MM/YYYY","hasMask":true,"mask":"##/##/####","singleMode":true,"readOnly":true},"control-5a350b19-d671-4f7e-8bc0-a4ba8fe6d0b9":{"uniqueId":"control-5a350b19-d671-4f7e-8bc0-a4ba8fe6d0b9","type":"input","name":"VAC2DOS","label":"Data da 2ª dose:","subLabel":"","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"disableByRoleSetting":false,"format":"DD/MM/YYYY","hasMask":true,"mask":"##/##/####","singleMode":true,"readOnly":true},"control-1659802d-c6fd-4528-968f-0c3e68dfe000":{"uniqueId":"control-1659802d-c6fd-4528-968f-0c3e68dfe000","type":"input","name":"VACOUTRA","label":"Outra vacina para COVID-19:","subLabel":"Caso a vacina recebida não esteja listada, relate qual:","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[]},"control-639dddd0-03a3-4f98-9be7-e5a8b22a1bb2":{"uniqueId":"control-639dddd0-03a3-4f98-9be7-e5a8b22a1bb2","type":"input","name":"INSTITUICAO","label":"Instituição","subLabel":"Nome do Instituição","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"default_value":"","hasMask":false,"mask":null,"hasDefaultValue":true,"defaultValueKey":"hospital_name","disableByRoleSetting":false},"control-a23e8108-69c3-4e40-a680-5d5a95755799":{"uniqueId":"control-a23e8108-69c3-4e40-a680-5d5a95755799","type":"text","name":"STOBOUT","label":"Especificar, caso outro local","subLabel":"Especificar o setor do óbito, caso outro","isShowLabel":true,"isDisabled":false,"isUpperCaseMode":false,"hideOnReport":false,"placeholderText":"","containerClass":"col-md-6 md-layout-item md-size-50","textTransformClass":"","additionalContainerClass":"","additionalFieldClass":"","additionalLabelClass":"","defaultValue":"","validations":[],"rows":3}}}

export {
  DEMO_FORM_DATA, DEMO_FORM_DATA_2
}
