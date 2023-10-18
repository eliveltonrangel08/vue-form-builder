<template>
    <div id="app">
        <h1 class="text-center mt-2">Vue-Form-Builder @ v2.1.0 - Development-Preview</h1>
        <p class="text-center">Presented by <strong>Seth (Sandaru) Phat</strong></p>
        <h4 class="text-center mb-3">What you <strong>BUILD</strong> is what you <strong>GOT</strong>.</h4>

        <div class="col-md-12">
            <button class="btn btn-info mr-2" @click="getData">Get JSON Form-Data (Console / Builder)</button>
            <button class="btn btn-info mr-2" @click="setData">Set JSON Form-Data (Basic Configuration / Builder)</button>
            <button class="btn btn-info mr-2" @click="createBlank">Create Blank Form (Builder)</button>

            <button class="btn btn-info mr-2" @click="viewRenderer">
                <span v-show="isRenderer">
                    Back to Builder
                </span>
                <span v-show="!isRenderer">
                    View Renderer Form from Basic Configuration
                </span>
            </button>
        </div>

        <hr>

        <FormBuilder v-if="!isRenderer" v-model="formData"></FormBuilder>

        <div class="row" v-if="isRenderer" style="padding: 20px; margin-right: 0">
            <div class="col-md-12 mb-4">
                <button class="btn btn-success  mr-2" @click="isShowData = !isShowData">
                    <span v-show="isShowData">Hide Form Data</span>
                    <span v-show="!isShowData">Show Form Data</span>
                </button>

                <button class="btn btn-info mr-2" @click="setRandomData">Set Random Data</button>
            </div>

            <FormRenderer :class="{'col-md-9': isShowData, 'col-md-12': !isShowData}"
                          :form-configuration="formData"
                          v-model="formInputData" />

            <div class="p-0" :class="{'col-md-3': isShowData, 'd-none': !isShowData}">
                <h4>Form Input Data</h4>
                <pre class="code"><code class="code" v-html="JSON.stringify(formInputData, null, 2)"></code></pre>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * NOTE - This file only exists for development purpose.
     */
    import FormBuilder from "@/components/FormBuilder";
    import FormRenderer from "@/components/FormRenderer";
    import {DEMO_FORM_DATA, DEMO_FORM_DATA_2} from "@/demo-form-data";

    export default {
        components: {
            FormBuilder,
            FormRenderer
        },
        data: () => ({
            formData: null,
            isShowDevNote: false,
            isRenderer: false,
            formInputData: null,
            isShowData: false
        }),
        created() {
          this.formInputData = {"RA":"Núcleo Bandeirante\r","NOME":"MARIA DORISMAR DA SILVA NUNES ","OCUP":"SERVIÇO GERAIS","SEXO":"FEMININO","CBCRO":"J18.9 - Pneumonia nao especificada\r","ANEXDO":{"name":"MARIA DORISMAR DA SILVA NUNES - DO_compressed.pdf","type":"application/pdf","data_base64":null,"form_files_id":38747,"original_size":233046,"compressed_size":152907},"ATUSIM":[],"CBDEFP":["HISTORIACLINICA","EXAMESLABORATORIAIS","OUTROS"],"COMCRO":"PACIENTE VEIO A OBITO NA UNIDADE COM MENOS DE 24 HORAS DE INTERNAÇÃO. \nDR. CONVERSA COM A FILHA SOBRE OS CUIDADOS PALIATIVOS.","COMORB":"HAS,\nALZHEIMER,\nOSTEOPOROSE","DTNASC":"1936-07-12","ENDRES":"AVENIDA CENTRAL BLOCO 1565 Nº 09 - NUCLEO BANDEIRANTE ","RESUMO":"HD:\nPAC\nDESIDRATAÇÃO\nINSUFICIENCIA RENAL (CR 3,18 UR 127,0)\n.\nADMISSAO\nPACIENTE ACAMADA, TRAZIDA PELA FILHA QUE REFERE DESCONFORTO RESPIRATÓRIO, TOSSE, RECUSA\nALIMENTAR E REBAIXAMENTO DO NÍVEL DE CONSCIÊNCIA HÁ 1 DIA COM PIORA NAS ÚLTIMAS 5 DIAS.\nNEGA FEBRE, DIARREIA, NÁUSEAS, VÔMITOS.\n.\nHPP:\nHAS,\nALZHEIMER,\nOSTEOPOROSE\n.\nMUC:\nLOSARTANA 50MG 1-0-0,\nSELOZOK 25MG 1-0-0,\nSOMALGIN 100MG 0-1-0,\nDOMPEZILA 0-0-1,\nQUETIAPINA 75MG 0-0-1\n.\nNEGA ALERGIA MEDICAMENTOSA\n.\nEVOLUÇÃO MÉDICA\nPACIENTE EM LEITO DE SALA VERMELHA\nHEMODINAMICAMENTE INSTAVEL\nEM USO DE MNR 15L/MIN MANTRENDO SATURAÇÃO BAIXA\nCIANOSE EM EXTREMIDADES\nDIETA ZERO ATE O MOENTO MANTENDO HGT ESTAVEL\nCONVERSADO COMFILHA VERONIUCA SENDO OPTADO PÓR CUIDADOS PALIATIVOS\n.\nAO EXAME - PACIENTE REG, HIPOCORADA, POUCO CONTACTUANTE\nSSVV PA 87/53 MMHG FC 150 BPM\nAR - MVF COM CREPITAÇÕES BILATERIAS\n\nACV- B HIPOFONETCIA NR EM 2T\nMMII SEM EDEMA PULSOS PRESENTES BILATERAIS SIMETRICOS\n.\nEXAMES\nLAB 17/04: TGP 84,0 TTO 48,0 HB 14,23 HT 41,27 GL 8594,0 PLAQ 223500 CR 3,18 UR 127,0 K 4,3 NA 150,8 CPK\n104,58 CKMB 3,6 TROP 1,242 PCR 17,92\n.\nCONVERSADO PESSOALMENTE COM ACOMPANHANTE VERONICO FIULHA DE PACIENTE E CUIDADORA DA\nMESMO SENDO OPTADO A NÃO REALIZAÇÃO DE MEDIDAS INVASIVAS NA MESMA E CONTROLE ALGICO\nPACIENTE PALIATIVA COM CUIDADOS PROPORCIONAIS\n\nPACIENTE EVOLUINDO COM BRADICARDIA SEGUIDA D EHIPOTENSÃO\nPOSTERIORMENTE EVOLUINDO COM PARADA RESPIRATORIA E GASPING\nCONFORME ACORDADO COM FAMILIAR VERONICA FILHA DA PACIENTE REALIZADA APENAS MEDIDAS DE\nCONFORTO SEM MEDIDAS INVASIVAS\nPACIENTE EVOLUINDO PRONTAMENTE COM ASSITOLIA E AUSÊNCIA DE SINAIS VITAIS\n","REXAME":"EXAMES\nLAB 17/04: TGP 84,0 TTO 48,0 HB 14,23 HT 41,27 GL 8594,0 PLAQ 223500 CR 3,18 UR 127,0 K 4,3 NA 150,8 CPK\n104,58 CKMB 3,6 TROP 1,242 PCR 17,92\n\nCirurgia : Laparotomia Exploradora (03.06.2016)\n1. Paciente em decúbito dorsal sob anestesia geral\n2. Assepsia, antissepsia e colocação de campos cirúrgicos;\n3. Incisão mediana na pele supra pubica - supra umbilical\n4. Abertura da parede abdominal por planos;\n5. Inventário da cavidade : massa tumoral volumosa de consistência pétria em\novario E , inpactada em pelve;\n6. Pinçamento, secção e ligadura do pediculo tubo ovariano E e feito\nsalpingooforectomia a E, com retirada da peça, e encaminhada a patologia para\ncongelação\n7. Pinçamento, secção e ligadura do ligamento redondo bilateralmente;\n8. Pinçamento, secção e ligadura do pedículo tubo-ovariano D\n9. Dissecção do peritônio anterior com rebaixamento da bexiga e peritônio\nposterior;\n10. Pinçamento, secção e ligadura da artéria uterina bilateralmente;\n11. Pinçamento, secção e ligadura do ligamento útero-sacro bilateralmente;\n12. Identificação do colo uterino;\n13. Secção à nível de colo uterino com retirada da peça cirúrgica;\n14. Fechamento de cúpula vaginal com ancoramento de útero-sacro e\nparamétrios\n15. Revisão exaustiva e rigorosa da hemostasia;\n16. Limpeza da cavidade abdominal;\n","TPRONT":"SIM","VACINA":"SEMINFORMACOESSOBREUSODEVACINA","ANEXEXC":{"name":"MARIA DORISMAR DA SILVA NUNES - TR.pdf","type":"application/pdf","data_base64":null,"form_files_id":38748,"original_size":186997,"compressed_size":120785},"CBGIASS":"","DTOBITO":"2023-04-17","NOMEMAE":"MARIA MOREIRA DA SILVA","PCOMORB":["OUTRASCOMORBIDADES","HIPERTENSAOARTERIALSISTEMATICA"],"SETOROB":"EMERGENCIA","STOBOUT":"SALA VERMELHA","VAC1DOS":"","VAC2DOS":"","COMGIASS":"","DTINTERN":"2023-04-16","EVENTMEC":"NAO","NUMERODO":"34251193","UFMUNRES":"DF-Brasília","VACOUTRA":"","INVCROCON":"SIM","DTAVAGIASS":"","INVGIASSCO":"","INSTITUICAO":"UPA NUCLEO BANDEIRANTE"}
        },
      methods: {
            getData() {
                console.log(JSON.stringify(this.formData))
            },

            createBlank() {
                this.formData = Object.assign({})
            },

            setData() {
                this.formData = Object.assign({}, DEMO_FORM_DATA_2);
            },

            viewRenderer() {
                if (!this.isRenderer) {
                    this.setData();
                    this.isRenderer = true;
                    return;
                }

                this.isRenderer = false;
            },

            setRandomData() {
              this.$set(this, 'formInputData',
                {"RA":"Núcleo Bandeirante\r","NOME":"MARIA DORISMAR DA SILVA NUNES ","OCUP":"SERVIÇO GERAIS","SEXO":"FEMININO","CBCRO":"J18.9 - Pneumonia nao especificada\r","ANEXDO":{"name":"MARIA DORISMAR DA SILVA NUNES - DO_compressed.pdf","type":"application/pdf","data_base64":null,"form_files_id":38747,"original_size":233046,"compressed_size":152907},"ATUSIM":[],"CBDEFP":["HISTORIACLINICA","EXAMESLABORATORIAIS","OUTROS"],"COMCRO":"PACIENTE VEIO A OBITO NA UNIDADE COM MENOS DE 24 HORAS DE INTERNAÇÃO. \nDR. CONVERSA COM A FILHA SOBRE OS CUIDADOS PALIATIVOS.","COMORB":"HAS,\nALZHEIMER,\nOSTEOPOROSE","DTNASC":"1936-07-12","ENDRES":"AVENIDA CENTRAL BLOCO 1565 Nº 09 - NUCLEO BANDEIRANTE ","RESUMO":"HD:\nPAC\nDESIDRATAÇÃO\nINSUFICIENCIA RENAL (CR 3,18 UR 127,0)\n.\nADMISSAO\nPACIENTE ACAMADA, TRAZIDA PELA FILHA QUE REFERE DESCONFORTO RESPIRATÓRIO, TOSSE, RECUSA\nALIMENTAR E REBAIXAMENTO DO NÍVEL DE CONSCIÊNCIA HÁ 1 DIA COM PIORA NAS ÚLTIMAS 5 DIAS.\nNEGA FEBRE, DIARREIA, NÁUSEAS, VÔMITOS.\n.\nHPP:\nHAS,\nALZHEIMER,\nOSTEOPOROSE\n.\nMUC:\nLOSARTANA 50MG 1-0-0,\nSELOZOK 25MG 1-0-0,\nSOMALGIN 100MG 0-1-0,\nDOMPEZILA 0-0-1,\nQUETIAPINA 75MG 0-0-1\n.\nNEGA ALERGIA MEDICAMENTOSA\n.\nEVOLUÇÃO MÉDICA\nPACIENTE EM LEITO DE SALA VERMELHA\nHEMODINAMICAMENTE INSTAVEL\nEM USO DE MNR 15L/MIN MANTRENDO SATURAÇÃO BAIXA\nCIANOSE EM EXTREMIDADES\nDIETA ZERO ATE O MOENTO MANTENDO HGT ESTAVEL\nCONVERSADO COMFILHA VERONIUCA SENDO OPTADO PÓR CUIDADOS PALIATIVOS\n.\nAO EXAME - PACIENTE REG, HIPOCORADA, POUCO CONTACTUANTE\nSSVV PA 87/53 MMHG FC 150 BPM\nAR - MVF COM CREPITAÇÕES BILATERIAS\n\nACV- B HIPOFONETCIA NR EM 2T\nMMII SEM EDEMA PULSOS PRESENTES BILATERAIS SIMETRICOS\n.\nEXAMES\nLAB 17/04: TGP 84,0 TTO 48,0 HB 14,23 HT 41,27 GL 8594,0 PLAQ 223500 CR 3,18 UR 127,0 K 4,3 NA 150,8 CPK\n104,58 CKMB 3,6 TROP 1,242 PCR 17,92\n.\nCONVERSADO PESSOALMENTE COM ACOMPANHANTE VERONICO FIULHA DE PACIENTE E CUIDADORA DA\nMESMO SENDO OPTADO A NÃO REALIZAÇÃO DE MEDIDAS INVASIVAS NA MESMA E CONTROLE ALGICO\nPACIENTE PALIATIVA COM CUIDADOS PROPORCIONAIS\n\nPACIENTE EVOLUINDO COM BRADICARDIA SEGUIDA D EHIPOTENSÃO\nPOSTERIORMENTE EVOLUINDO COM PARADA RESPIRATORIA E GASPING\nCONFORME ACORDADO COM FAMILIAR VERONICA FILHA DA PACIENTE REALIZADA APENAS MEDIDAS DE\nCONFORTO SEM MEDIDAS INVASIVAS\nPACIENTE EVOLUINDO PRONTAMENTE COM ASSITOLIA E AUSÊNCIA DE SINAIS VITAIS\n","REXAME":"EXAMES\nLAB 17/04: TGP 84,0 TTO 48,0 HB 14,23 HT 41,27 GL 8594,0 PLAQ 223500 CR 3,18 UR 127,0 K 4,3 NA 150,8 CPK\n104,58 CKMB 3,6 TROP 1,242 PCR 17,92\n\nCirurgia : Laparotomia Exploradora (03.06.2016)\n1. Paciente em decúbito dorsal sob anestesia geral\n2. Assepsia, antissepsia e colocação de campos cirúrgicos;\n3. Incisão mediana na pele supra pubica - supra umbilical\n4. Abertura da parede abdominal por planos;\n5. Inventário da cavidade : massa tumoral volumosa de consistência pétria em\novario E , inpactada em pelve;\n6. Pinçamento, secção e ligadura do pediculo tubo ovariano E e feito\nsalpingooforectomia a E, com retirada da peça, e encaminhada a patologia para\ncongelação\n7. Pinçamento, secção e ligadura do ligamento redondo bilateralmente;\n8. Pinçamento, secção e ligadura do pedículo tubo-ovariano D\n9. Dissecção do peritônio anterior com rebaixamento da bexiga e peritônio\nposterior;\n10. Pinçamento, secção e ligadura da artéria uterina bilateralmente;\n11. Pinçamento, secção e ligadura do ligamento útero-sacro bilateralmente;\n12. Identificação do colo uterino;\n13. Secção à nível de colo uterino com retirada da peça cirúrgica;\n14. Fechamento de cúpula vaginal com ancoramento de útero-sacro e\nparamétrios\n15. Revisão exaustiva e rigorosa da hemostasia;\n16. Limpeza da cavidade abdominal;\n","TPRONT":"SIM","VACINA":"SEMINFORMACOESSOBREUSODEVACINA","ANEXEXC":{"name":"MARIA DORISMAR DA SILVA NUNES - TR.pdf","type":"application/pdf","data_base64":null,"form_files_id":38748,"original_size":186997,"compressed_size":120785},"CBGIASS":"","DTOBITO":"2023-04-17","NOMEMAE":"MARIA MOREIRA DA SILVA","PCOMORB":["OUTRASCOMORBIDADES","HIPERTENSAOARTERIALSISTEMATICA"],"SETOROB":"EMERGENCIA","STOBOUT":"SALA VERMELHA","VAC1DOS":"","VAC2DOS":"","COMGIASS":"","DTINTERN":"2023-04-16","EVENTMEC":"NAO","NUMERODO":"34251193","UFMUNRES":"DF-Brasília","VACOUTRA":"","INVCROCON":"SIM","DTAVAGIASS":"","INVGIASSCO":"","INSTITUICAO":"UPA NUCLEO BANDEIRANTE"}
              )
            },

            setRandomData2() {
                const faker = require('faker');

                this.$set(this, 'formInputData', {
                    "name": faker.name.findName(),
                    "brief-description": faker.company.companyName(),
                    "long-description": faker.lorem.paragraphs(),
                    "user_email": faker.internet.email(),
                    "is_deletable": faker.random.number({min: 0, max:1}),
                    "doc_props": [""+faker.random.number({min: 1, max:3})],
                    "doc_date": faker.date.past(),
                    "doc-process-range": {
                        startDate: faker.date.past(),
                        endDate: faker.date.future(),
                    },
                    "total_value": faker.finance.amount()
                });
            },
        }
    }
</script>

<style scoped>
    pre {
        background: #333;
        white-space: pre;
        word-wrap: break-word;
        overflow: auto;
    }

    pre.code {
        margin: 20px 0;
        border-radius: 4px;
        border: 1px solid #292929;
        position: relative;
    }

    pre.code code {
        display: block;
        padding: 15px 16px 14px;
        border-left: 1px solid #555;
        overflow-x: auto;
        font-size: 13px;
        line-height: 19px;
        color: #ddd;
    }
</style>
