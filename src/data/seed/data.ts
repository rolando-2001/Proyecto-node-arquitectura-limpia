import { bcryptAdapter } from "../../config";

export const seedData = {
    users: [
        { name: 'Test 1', email: 'test1@google.com', password: bcryptAdapter.hash('123456') },
        { name: 'Test 2', email: 'test2@google.com', password: bcryptAdapter.hash('123456') },
        { name: 'Test 3', email: 'test3@google.com', password: bcryptAdapter.hash('123456') },
        { name: 'Test 4', email: 'test4@google.com', password: bcryptAdapter.hash('123456') },
        { name: 'Test 5', email: 'test5@google.com', password: bcryptAdapter.hash('123456') },
        { name: 'Test 6', email: 'test6@google.com', password: bcryptAdapter.hash('123456') },
    ],

    categories: [
        { name: 'Driven' },
        { name: 'Till' },
        { name: 'Shout' },
        { name: 'Distance' },
        { name: 'Became' },
        { name: 'Chapter' },
        { name: 'Syllable' },
        { name: 'Arm' },
        { name: 'Guard' },
        { name: 'Perfectly' },
        { name: 'Expect' },
        { name: 'Hardly' },
        { name: 'anyone' },
        { name: 'vessels' },
        { name: 'angle' },
        { name: 'degree' },
        { name: 'split' },
        { name: 'would' },
        { name: 'kitchen' },
        { name: 'planned' },
        { name: 'combination' },
        { name: 'felt' },
    ],

    products: [
        { name: 'Than', available: true, price: 75.0369, descripcion: 'daughter me move thumb claws lose supper strip animal teach additional definition why pitch help thus boy like every mud month are account dozen' },
        { name: 'Wagon', available: true, price: 1.9631, descripcion: 'actual difficult nature yellow smile captain nervous to cause wolf strong neck fifteen wrote consider visit likely happened rear red review wash flag parent' },
        { name: 'Tone', available: true, price: 11.0312, descripcion: 'met certain specific detail deeply red forth tiny whatever what image parts deer difficulty pair mixture trouble forgotten fort dry listen strength got seldom' },
        { name: 'Song', available: true, price: 99.2314, descripcion: 'look board flat river solve spite universe history use pool frequently twenty basic lying this came poetry particular function previous suit west shore tomorrow' },
        { name: 'Plenty', available: true, price: 75.4476, descripcion: 'dinner welcome screen expression structure plastic doubt missing thank garage property particular park syllable slide cup alphabet swimming stood fought fog shut spite ever' },
        { name: 'Season', available: false, price: 91.6254, descripcion: 'canal promised split headed studying had declared vessels hello matter lovely congress birthday fed word street happened ought cold heavy cage shoulder sight applied' },
        { name: 'Voyage', available: true, price: 84.0274, descripcion: 'reach myself owner building anyway tool dance particles branch shadow clear home of grass rabbit wind bit barn slipped husband recent tongue important zero' },
        { name: 'Medicine', available: true, price: 38.1478, descripcion: 'mountain five art moving foot roll harder lucky pitch mile nails married finally spend adult left storm easy cry increase cook drew announced glad' },
        { name: 'How', available: true, price: 47.5355, descripcion: 'heat student highway very word health them feel off cover trail cage went mission ice safety disease observe copy flat speech experiment now finest' },
        { name: 'Saved', available: true, price: 75.9318, descripcion: 'weather mud friend brother breakfast corn prevent numeral deer quiet so name fastened tongue sing phrase concerned tree pass flies fighting chapter fence act' },
        { name: 'High', available: true, price: 90.1331, descripcion: 'went split establish speak origin itself news when cross stand value vertical decide bicycle tone are market view depth income touch above nation spread' },
        { name: 'Colony', available: true, price: 27.3687, descripcion: 'jungle weight whether printed west egg run cut rod football fewer trouble hearing him been note select our shelf afraid jump alike slip shore' },
        { name: 'Dozen', available: false, price: 63.9702, descripcion: 'tobacco spent congress who accept pond outline changing flow find cat mirror tax keep twenty yellow into pile reach move plan recall nervous gold' },
        { name: 'Bean', available: true, price: 44.1797, descripcion: 'direct might am golden block seat birth television taught twenty clock process safety shirt guard control cent follow couple eleven weather location turn parent' },
        { name: 'Pain', available: true, price: 74.0199, descripcion: 'start difficult two force source job process tomorrow machinery physical loose five fruit leaving century ourselves difference for frog throughout bridge atomic sunlight send' },
        { name: 'Clearly', available: true, price: 8.6356, descripcion: 'well poem little but therefore instant tight outline foreign drove characteristic mine leader cold close club satellites quiet face tobacco age gas bend push' },
        { name: 'Immediately', available: true, price: 41.4278, descripcion: 'feel shot fill square caught would valley path whispered come porch function pocket fish division think same sign was adventure worry bean wealth realize' },
        { name: 'Sent', available: false, price: 95.3915, descripcion: 'shut cookies goes serious several change poet principle play congress begun mill composition unless piece negative expect ancient milk shall house period stranger eight' },
        { name: 'Globe', available: true, price: 32.7184, descripcion: 'saw clean golden brick shot brave percent damage eight chain young tears religious stems speak element example eager busy satellites pain fast operation person' },
        { name: 'Battle', available: true, price: 53.4763, descripcion: 'his prevent sight camera ring generally glad refused among group nervous cave box rate breath somehow whether gate plant related citizen even yellow after' },
        { name: 'Elephant', available: true, price: 42.5209, descripcion: 'ocean pink smell cent globe shot trouble guard troops swing sat hat back softly smaller direction seen jar strike union language off cookies serious' },
        { name: 'Special', available: true, price: 85.0522, descripcion: 'slip front wrapped corner rose audience eat consider manufacturing swept seven yard sing purple industrial picture carbon social pole deal vowel slipped truck dozen' },
    ],

    usuarios: [
        {
            numero: '74812800',
            nombres: 'ROLANDO',
            apellido_paterno: 'CASAPAICO',
            apellido_materno: 'HUAMAN',
            nombre_completo: 'CASAPAICO HUAMAN, ROLANDO',
            departamento: 'APURIMAC',
            provincia: 'CHINCHEROS',
            distrito: 'CHINCHEROS',
            direccion: 'SANTA FE',
            direccion_completa: 'SANTA FE, APURIMAC - CHINCHEROS - CHINCHEROS',
            ubigeo_reniec: '030701',
            ubigeo_sunat: '030601',
            ubigeo: ['03', '0306', '030601'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '74812801',
            nombres: 'AYDEE',
            apellido_paterno: 'CASAPAICO',
            apellido_materno: 'HUAMAN',
            nombre_completo: 'CASAPAICO HUAMAN, AYDEE',
            departamento: 'APURIMAC',
            provincia: 'CHINCHEROS',
            distrito: 'CHINCHEROS',
            direccion: 'C.P. SANTA FE',
            direccion_completa: 'C.P. SANTA FE, APURIMAC - CHINCHEROS - CHINCHEROS',
            ubigeo_reniec: '030701',
            ubigeo_sunat: '030601',
            ubigeo: ['03', '0306', '030601'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '74812802',
            nombres: 'ALEX',
            apellido_paterno: 'CASAPAICO',
            apellido_materno: 'HUAMAN',
            nombre_completo: 'CASAPAICO HUAMAN, ALEX',
            departamento: 'APURIMAC',
            provincia: 'CHINCHEROS',
            distrito: 'CHINCHEROS',
            direccion: 'C.POBLADO SANTA FE',
            direccion_completa: 'C.POBLADO SANTA FE, APURIMAC - CHINCHEROS - CHINCHEROS',
            ubigeo_reniec: '030701',
            ubigeo_sunat: '030601',
            ubigeo: ['03', '0306', '030601'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '74211240',
            nombres: 'BLANCA NELIDA',
            apellido_paterno: 'SALDAÑA',
            apellido_materno: 'RAMOS',
            nombre_completo: 'SALDAÑA RAMOS, BLANCA NELIDA',
            departamento: 'ICA',
            provincia: 'CHINCHA',
            distrito: 'EL CARMEN',
            direccion: 'FUNDO PUNTA DE LA ISLA S/N',
            direccion_completa: 'FUNDO PUNTA DE LA ISLA S/N, ICA - CHINCHA - EL CARMEN',
            ubigeo_reniec: '100204',
            ubigeo_sunat: '110205',
            ubigeo: ['11', '1102', '110205'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '74211238',
            nombres: 'FATIMA AURORA',
            apellido_paterno: 'SALDAÑA',
            apellido_materno: 'RAMOS',
            nombre_completo: 'SALDAÑA RAMOS, FATIMA AURORA',
            departamento: 'ICA',
            provincia: 'CHINCHA',
            distrito: 'EL CARMEN',
            direccion: 'FUNDO PUNTA DE LA ISLA S/N',
            direccion_completa: 'FUNDO PUNTA DE LA ISLA S/N, ICA - CHINCHA - EL CARMEN',
            ubigeo_reniec: '100204',
            ubigeo_sunat: '110205',
            ubigeo: ['11', '1102', '110205'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '76555115',
            nombres: 'LUIS MIGUEL',
            apellido_paterno: 'NAVARRO',
            apellido_materno: 'HUARACA',
            nombre_completo: 'NAVARRO HUARACA, LUIS MIGUEL',
            departamento: 'APURIMAC',
            provincia: 'CHINCHEROS',
            distrito: 'CHINCHEROS',
            direccion: 'SANTA FE',
            direccion_completa: 'SANTA FE, APURIMAC - CHINCHEROS - CHINCHEROS',
            ubigeo_reniec: '030701',
            ubigeo_sunat: '030601',
            ubigeo: ['03', '0306', '030601'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '71897638',
            nombres: 'NANCY EDITH',
            apellido_paterno: 'BENAVIDES',
            apellido_materno: 'ELME',
            nombre_completo: 'BENAVIDES ELME, NANCY EDITH',
            departamento: 'CUSCO',
            provincia: 'CHUMBIVILCAS',
            distrito: 'COLQUEMARCA',
            direccion: 'COMUNIDAD LLAULLINCO',
            direccion_completa: 'COMUNIDAD LLAULLINCO, CUSCO - CHUMBIVILCAS - COLQUEMARCA',
            ubigeo_reniec: '070703',
            ubigeo_sunat: '080704',
            ubigeo: ['08', '0807', '080704'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },

        {
            numero: '71985277',
            nombres: 'YUDI',
            apellido_paterno: 'CASAPAICO',
            apellido_materno: 'HUAMAN',
            nombre_completo: 'CASAPAICO HUAMAN, YUDI',
            departamento: 'LIMA',
            provincia: 'LIMA',
            distrito: 'VILLA EL SALVADOR',
            direccion: 'MZ.G LT.1 GRUPO 3 SECTOR 9 AH. MIRADOR DE VILLA AMP. LA ENCANTADA',
            direccion_completa: 'MZ.G LT.1 GRUPO 3 SECTOR 9 AH. MIRADOR DE VILLA AMP. LA ENCANTADA, LIMA - LIMA - VILLA EL SALVADOR',
            ubigeo_reniec: '140141',
            ubigeo_sunat: '150142',
            ubigeo: ['15', '1501', '150142'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '43922258',
            nombres: 'DELFIN',
            apellido_paterno: 'FLORES',
            apellido_materno: 'HUAMAN',
            nombre_completo: 'FLORES HUAMAN, DELFIN',
            departamento: 'LIMA',
            provincia: 'LIMA',
            distrito: 'VILLA EL SALVADOR',
            direccion: 'MZ.G LT.1 GRUPO 3 SECTOR 9 AH MIRADOR DE VILLA AMP. LA ENCANTADA',
            direccion_completa: 'MZ.G LT.1 GRUPO 3 SECTOR 9 AH MIRADOR DE VILLA AMP. LA ENCANTADA, LIMA - LIMA - VILLA EL SALVADOR',
            ubigeo_reniec: '140141',
            ubigeo_sunat: '150142',
            ubigeo: ['15', '1501', '150142'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '40034097',
            nombres: 'KARINA',
            apellido_paterno: 'CASAPAICO',
            apellido_materno: 'HUAMAN',
            nombre_completo: 'CASAPAICO HUAMAN, KARINA',
            departamento: 'APURIMAC',
            provincia: 'CHINCHEROS',
            distrito: 'CHINCHEROS',
            direccion: 'SAN CRISTOBAL',
            direccion_completa: 'SAN CRISTOBAL, APURIMAC - CHINCHEROS - CHINCHEROS',
            ubigeo_reniec: '030701',
            ubigeo_sunat: '030601',
            ubigeo: ['03', '0306', '030601'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '40034579',
            nombres: 'RODRIGO',
            apellido_paterno: 'LLOCCLLA',
            apellido_materno: 'CRUZ',
            nombre_completo: 'LLOCCLLA CRUZ, RODRIGO',
            departamento: 'APURIMAC',
            provincia: 'CHINCHEROS',
            distrito: 'CHINCHEROS',
            direccion: 'SECTOR SAN CRISTOBAL',
            direccion_completa: 'SECTOR SAN CRISTOBAL, APURIMAC - CHINCHEROS - CHINCHEROS',
            ubigeo_reniec: '030701',
            ubigeo_sunat: '030601',
            ubigeo: ['03', '0306', '030601'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '76950226',
            nombres: 'CLARINCIA GABRIELA',
            apellido_paterno: 'LLOCCLLA',
            apellido_materno: 'CASAPAICO',
            nombre_completo: 'LLOCCLLA CASAPAICO, CLARINCIA GABRIELA',
            departamento: 'AYACUCHO',
            provincia: 'HUAMANGA',
            distrito: 'AYACUCHO',
            direccion: 'PSJ. ICA P - 18',
            direccion_completa: 'PSJ. ICA P - 18, AYACUCHO - HUAMANGA - AYACUCHO',
            ubigeo_reniec: '050101',
            ubigeo_sunat: '050101',
            ubigeo: ['05', '0501', '050101'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '44673735',
            nombres: 'MICHAEL',
            apellido_paterno: 'VILLANUEVA',
            apellido_materno: 'ESPINO',
            nombre_completo: 'VILLANUEVA ESPINO, MICHAEL',
            departamento: 'AYACUCHO',
            provincia: 'HUAMANGA',
            distrito: 'AYACUCHO',
            direccion: 'PJ. ICA MZ. P LT. 18',
            direccion_completa: 'PJ. ICA MZ. P LT. 18, AYACUCHO - HUAMANGA - AYACUCHO',
            ubigeo_reniec: '050101',
            ubigeo_sunat: '050101',
            ubigeo: ['05', '0501', '050101'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '92258801',
            nombres: 'GABRIEL MICHAEL  ',
            apellido_paterno: 'VILLANUEVA',
            apellido_materno: 'LLOCCLLA',
            nombre_completo: 'VILLANUEVA LLOCCLLA, GABRIEL MICHAEL  ',
            departamento: 'AYACUCHO',
            provincia: 'HUAMANGA',
            distrito: 'AYACUCHO',
            direccion: '',
            direccion_completa: ', AYACUCHO - HUAMANGA - AYACUCHO',
            ubigeo_reniec: '050101',
            ubigeo_sunat: '050101',
            ubigeo: ['05', '0501', '050101'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '74812799',
            nombres: 'KAREN',
            apellido_paterno: 'LLOCCLLA',
            apellido_materno: 'CASAPAICO',
            nombre_completo: 'LLOCCLLA CASAPAICO, KAREN',
            departamento: 'APURIMAC',
            provincia: 'CHINCHEROS',
            distrito: 'CHINCHEROS',
            direccion: 'ANEXO SABILAYOCC',
            direccion_completa: 'ANEXO SABILAYOCC, APURIMAC - CHINCHEROS - CHINCHEROS',
            ubigeo_reniec: '030701',
            ubigeo_sunat: '030601',
            ubigeo: ['03', '0306', '030601'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '76690867',
            nombres: 'KELLY',
            apellido_paterno: 'LLOCCLLA',
            apellido_materno: 'CASAPAICO',
            nombre_completo: 'LLOCCLLA CASAPAICO, KELLY',
            departamento: 'APURIMAC',
            provincia: 'CHINCHEROS',
            distrito: 'CHINCHEROS',
            direccion: 'ANEXO ORCCORBAMBA',
            direccion_completa: 'ANEXO ORCCORBAMBA, APURIMAC - CHINCHEROS - CHINCHEROS',
            ubigeo_reniec: '030701',
            ubigeo_sunat: '030601',
            ubigeo: ['03', '0306', '030601'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '60046947',
            nombres: 'KATTY',
            apellido_paterno: 'LLOCCLLA',
            apellido_materno: 'CASAPAICO',
            nombre_completo: 'LLOCCLLA CASAPAICO, KATTY',
            departamento: 'APURIMAC',
            provincia: 'CHINCHEROS',
            distrito: 'CHINCHEROS',
            direccion: 'ANEXO ORCCORBAMBA',
            direccion_completa: 'ANEXO ORCCORBAMBA, APURIMAC - CHINCHEROS - CHINCHEROS',
            ubigeo_reniec: '030701',
            ubigeo_sunat: '030601',
            ubigeo: ['03', '0306', '030601'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '60599004',
            nombres: 'MARISOL  ',
            apellido_paterno: 'LLOCCLLA',
            apellido_materno: 'CASAPAICO',
            nombre_completo: 'LLOCCLLA CASAPAICO, MARISOL  ',
            departamento: 'APURIMAC',
            provincia: 'CHINCHEROS',
            distrito: 'CHINCHEROS',
            direccion: 'ANEXO ORCCORBAMBA',
            direccion_completa: 'ANEXO ORCCORBAMBA, APURIMAC - CHINCHEROS - CHINCHEROS',
            ubigeo_reniec: '030701',
            ubigeo_sunat: '030601',
            ubigeo: ['03', '0306', '030601'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '41142306',
            nombres: 'FREDDY',
            apellido_paterno: 'CASAPAICO',
            apellido_materno: 'HUAMAN',
            nombre_completo: 'CASAPAICO HUAMAN, FREDDY',
            departamento: 'APURIMAC',
            provincia: 'CHINCHEROS',
            distrito: 'CHINCHEROS',
            direccion: 'ANEXO SANTA FE- CAYARA',
            direccion_completa: 'ANEXO SANTA FE- CAYARA, APURIMAC - CHINCHEROS - CHINCHEROS',
            ubigeo_reniec: '030701',
            ubigeo_sunat: '030601',
            ubigeo: ['03', '0306', '030601'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '45607158',
            nombres: 'GRACIELA',
            apellido_paterno: 'PILLACA',
            apellido_materno: 'CURO',
            nombre_completo: 'PILLACA CURO, GRACIELA',
            departamento: 'APURIMAC',
            provincia: 'CHINCHEROS',
            distrito: 'CHINCHEROS',
            direccion: 'CP.SANTA FE',
            direccion_completa: 'CP.SANTA FE, APURIMAC - CHINCHEROS - CHINCHEROS',
            ubigeo_reniec: '030701',
            ubigeo_sunat: '030601',
            ubigeo: ['03', '0306', '030601'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        }, {
            numero: '76580366',
            nombres: 'EDU',
            apellido_paterno: 'CASAPAICO',
            apellido_materno: 'PILLACA',
            nombre_completo: 'CASAPAICO PILLACA, EDU',
            departamento: 'APURIMAC',
            provincia: 'CHINCHEROS',
            distrito: 'CHINCHEROS',
            direccion: 'ANEXO ORCCORBAMBA',
            direccion_completa: 'ANEXO ORCCORBAMBA, APURIMAC - CHINCHEROS - CHINCHEROS',
            ubigeo_reniec: '030701',
            ubigeo_sunat: '030601',
            ubigeo: ['03', '0306', '030601'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '41688788',
            nombres: 'DAVID WILIAN',
            apellido_paterno: 'CASAPAICO',
            apellido_materno: 'HUAMAN',
            nombre_completo: 'CASAPAICO HUAMAN, DAVID WILIAN',
            departamento: 'LIMA',
            provincia: 'LIMA',
            distrito: 'VILLA EL SALVADOR',
            direccion: 'MZ.A LT.4 AH MIRADOR DE VILLA 200 MILLAS',
            direccion_completa: 'MZ.A LT.4 AH MIRADOR DE VILLA 200 MILLAS, LIMA - LIMA - VILLA EL SALVADOR',
            ubigeo_reniec: '140141',
            ubigeo_sunat: '150142',
            ubigeo: ['15', '1501', '150142'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '42420581',
            nombres: 'OLIMPIA',
            apellido_paterno: 'ZARATE',
            apellido_materno: 'HUAMAN',
            nombre_completo: 'ZARATE HUAMAN, OLIMPIA',
            departamento: 'LIMA',
            provincia: 'LIMA',
            distrito: 'VILLA EL SALVADOR',
            direccion: 'MZ.A LT.4 A.H.MIRADOR DE VILLA 200 MILLAS',
            direccion_completa: 'MZ.A LT.4 A.H.MIRADOR DE VILLA 200 MILLAS, LIMA - LIMA - VILLA EL SALVADOR',
            ubigeo_reniec: '140141',
            ubigeo_sunat: '150142',
            ubigeo: ['15', '1501', '150142'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '76708471',
            nombres: 'ALEXANDRA  ',
            apellido_paterno: 'CASAPAICO',
            apellido_materno: 'ZARATE',
            nombre_completo: 'CASAPAICO ZARATE, ALEXANDRA  ',
            departamento: 'LIMA',
            provincia: 'LIMA',
            distrito: 'VILLA EL SALVADOR',
            direccion: 'MZ.A LT.4 MIRADOR DE VILLA 200 MILLAS',
            direccion_completa: 'MZ.A LT.4 MIRADOR DE VILLA 200 MILLAS, LIMA - LIMA - VILLA EL SALVADOR',
            ubigeo_reniec: '140141',
            ubigeo_sunat: '150142',
            ubigeo: ['15', '1501', '150142'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '79098586',
            nombres: 'JAZMIN ARIANA  ',
            apellido_paterno: 'CASAPAICO',
            apellido_materno: 'ZARATE',
            nombre_completo: 'CASAPAICO ZARATE, JAZMIN ARIANA  ',
            departamento: 'LIMA',
            provincia: 'LIMA',
            distrito: 'VILLA EL SALVADOR',
            direccion: 'AV. SEPARADORA AGROINDUSTRIAL ASENT.H MIRADOR DE 200 MILLAS MZ. A LT. 4',
            direccion_completa: 'AV. SEPARADORA AGROINDUSTRIAL ASENT.H MIRADOR DE 200 MILLAS MZ. A LT. 4, LIMA - LIMA - VILLA EL SALVADOR',
            ubigeo_reniec: '140141',
            ubigeo_sunat: '150142',
            ubigeo: ['15', '1501', '150142'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '42718737',
            nombres: 'JOSE',
            apellido_paterno: 'CASAPAICO',
            apellido_materno: 'HUAMAN',
            nombre_completo: 'CASAPAICO HUAMAN, JOSE',
            departamento: 'APURIMAC',
            provincia: 'CHINCHEROS',
            distrito: 'CHINCHEROS',
            direccion: 'CP.SANTA FE',
            direccion_completa: 'CP.SANTA FE, APURIMAC - CHINCHEROS - CHINCHEROS',
            ubigeo_reniec: '030701',
            ubigeo_sunat: '030601',
            ubigeo: ['03', '0306', '030601'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '43889876',
            nombres: 'INES HERLINDA',
            apellido_paterno: 'CASAPAYCO',
            apellido_materno: 'HUAMAN',
            nombre_completo: 'CASAPAYCO HUAMAN, INES HERLINDA',
            departamento: 'LIMA',
            provincia: 'LIMA',
            distrito: 'CARABAYLLO',
            direccion: 'RESD SAN LORENZO MZ.G LT.5',
            direccion_completa: 'RESD SAN LORENZO MZ.G LT.5, LIMA - LIMA - CARABAYLLO',
            ubigeo_reniec: '140105',
            ubigeo_sunat: '150106',
            ubigeo: ['15', '1501', '150106'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '41783856',
            nombres: 'JUAN CARLOS',
            apellido_paterno: 'PEREZ',
            apellido_materno: 'CASTRO',
            nombre_completo: 'PEREZ CASTRO, JUAN CARLOS',
            departamento: 'LIMA',
            provincia: 'LIMA',
            distrito: 'COMAS',
            direccion: 'JR.SAN GERONIMO 287',
            direccion_completa: 'JR.SAN GERONIMO 287, LIMA - LIMA - COMAS',
            ubigeo_reniec: '140106',
            ubigeo_sunat: '150110',
            ubigeo: ['15', '1501', '150110'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '78581856',
            nombres: 'MICAÍAS MIGUEL  ',
            apellido_paterno: 'PEREZ',
            apellido_materno: 'CASAPAYCO',
            nombre_completo: 'PEREZ CASAPAYCO, MICAÍAS MIGUEL  ',
            departamento: 'LIMA',
            provincia: 'LIMA',
            distrito: 'COMAS',
            direccion: 'SAN JUAN BAUTISTA 1-A MZ. K LT. 06',
            direccion_completa: 'SAN JUAN BAUTISTA 1-A MZ. K LT. 06, LIMA - LIMA - COMAS',
            ubigeo_reniec: '140106',
            ubigeo_sunat: '120206',
            ubigeo: ['12', '1202', '120206'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '46741764',
            nombres: 'REYNA ESTHER',
            apellido_paterno: 'CASAPAICO',
            apellido_materno: 'LLANTIRHUAY',
            nombre_completo: 'CASAPAICO LLANTIRHUAY, REYNA ESTHER',
            departamento: 'LIMA',
            provincia: 'LIMA',
            distrito: 'VILLA EL SALVADOR',
            direccion: 'ASENT.H. EL MIRADOR MZ. G LT. 1',
            direccion_completa: 'ASENT.H. EL MIRADOR MZ. G LT. 1, LIMA - LIMA - VILLA EL SALVADOR',
            ubigeo_reniec: '140141',
            ubigeo_sunat: '150142',
            ubigeo: ['15', '1501', '150142'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '43146794',
            nombres: 'ROLANDO',
            apellido_paterno: 'HERRERA',
            apellido_materno: 'HUAMAN',
            nombre_completo: 'HERRERA HUAMAN, ROLANDO',
            departamento: 'LIMA',
            provincia: 'LIMA',
            distrito: 'VILLA EL SALVADOR',
            direccion: 'MZ. G LT. 1 GRUPO 3 SECTOR 9 AH MIRADOR DE VILLA AMPL. LA ENCANTADA',
            direccion_completa: 'MZ. G LT. 1 GRUPO 3 SECTOR 9 AH MIRADOR DE VILLA AMPL. LA ENCANTADA, LIMA - LIMA - VILLA EL SALVADOR',
            ubigeo_reniec: '140141',
            ubigeo_sunat: '150142',
            ubigeo: ['15', '1501', '150142'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        }, {
            numero: '78914590',
            nombres: 'ADALIN LAYLA  ',
            apellido_paterno: 'ALONSO',
            apellido_materno: 'ROMERO',
            nombre_completo: 'ALONSO ROMERO, ADALIN LAYLA  ',
            departamento: 'LIMA',
            provincia: 'LIMA',
            distrito: 'CARABAYLLO',
            direccion: 'STO DOMINGO etapa 8 mz. J lt. 2',
            direccion_completa: 'STO DOMINGO etapa 8 mz. J lt. 2, LIMA - LIMA - CARABAYLLO',
            ubigeo_reniec: '140105',
            ubigeo_sunat: '150106',
            ubigeo: ['15', '1501', '150106'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '79921256',
            nombres: 'MILAN ORLANDO  ',
            apellido_paterno: 'HERRERA',
            apellido_materno: 'CASAPAICO',
            nombre_completo: 'HERRERA CASAPAICO, MILAN ORLANDO  ',
            departamento: 'LIMA',
            provincia: 'LIMA',
            distrito: 'VILLA EL SALVADOR',
            direccion: 'ASENT.H EL MIRADOR DE VILLA SECTOR 9 GRUPO 3 MZ. G LT. 1 LA ENCANTADA',
            direccion_completa: 'ASENT.H EL MIRADOR DE VILLA SECTOR 9 GRUPO 3 MZ. G LT. 1 LA ENCANTADA, LIMA - LIMA - VILLA EL SALVADOR',
            ubigeo_reniec: '140141',
            ubigeo_sunat: '150142',
            ubigeo: ['15', '1501', '150142'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '77851569',
            nombres: 'OLIVER  ',
            apellido_paterno: 'FLORES',
            apellido_materno: 'CASAPAICO',
            nombre_completo: 'FLORES CASAPAICO, OLIVER  ',
            departamento: 'LIMA',
            provincia: 'LIMA',
            distrito: 'VILLA EL SALVADOR',
            direccion: 'MZ.G LT.1 GRUPO 3 SECTOR 9 AH. MIRADOR DE VILLA AMP. LA ENCANTADA',
            direccion_completa: 'MZ.G LT.1 GRUPO 3 SECTOR 9 AH. MIRADOR DE VILLA AMP. LA ENCANTADA, LIMA - LIMA - VILLA EL SALVADOR',
            ubigeo_reniec: '140141',
            ubigeo_sunat: '150142',
            ubigeo: ['15', '1501', '150142'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '91820896',
            nombres: 'LORENA MARIBEL  ',
            apellido_paterno: 'FLORES',
            apellido_materno: 'CASAPAICO',
            nombre_completo: 'FLORES CASAPAICO, LORENA MARIBEL  ',
            departamento: 'APURIMAC',
            provincia: 'CHINCHEROS',
            distrito: 'ANCO_HUALLO',
            direccion: '',
            direccion_completa: ', APURIMAC - CHINCHEROS - ANCO_HUALLO',
            ubigeo_reniec: '030705',
            ubigeo_sunat: '030602',
            ubigeo: ['03', '0306', '030602'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '46251002',
            nombres: 'RAUL',
            apellido_paterno: 'ZARATE',
            apellido_materno: 'HUAMAN',
            nombre_completo: 'ZARATE HUAMAN, RAUL',
            departamento: 'APURIMAC',
            provincia: 'CHINCHEROS',
            distrito: 'ANCO HUALLO',
            direccion: 'JR. HUASCAR S/N',
            direccion_completa: 'JR. HUASCAR S/N, APURIMAC - CHINCHEROS - ANCO HUALLO',
            ubigeo_reniec: '',
            ubigeo_sunat: '',
            ubigeo: null,
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '79154865',
            nombres: 'MAYLIN  ',
            apellido_paterno: 'ZARATE',
            apellido_materno: 'CASAPAICO',
            nombre_completo: 'ZARATE CASAPAICO, MAYLIN  ',
            departamento: 'APURIMAC',
            provincia: 'CHINCHEROS',
            distrito: 'ANCO_HUALLO',
            direccion: 'AV. LOS INCAS S/N',
            direccion_completa: 'AV. LOS INCAS S/N, APURIMAC - CHINCHEROS - ANCO_HUALLO',
            ubigeo_reniec: '030705',
            ubigeo_sunat: '030602',
            ubigeo: ['03', '0306', '030602'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '31461217',
            nombres: 'JOSE CELESTINO',
            apellido_paterno: 'CASAPAICO',
            apellido_materno: 'PIPA',
            nombre_completo: 'CASAPAICO PIPA, JOSE CELESTINO',
            departamento: 'APURIMAC',
            provincia: 'CHINCHEROS',
            distrito: 'CHINCHEROS',
            direccion: 'CP. SANTA FE',
            direccion_completa: 'CP. SANTA FE, APURIMAC - CHINCHEROS - CHINCHEROS',
            ubigeo_reniec: '030701',
            ubigeo_sunat: '030601',
            ubigeo: ['03', '0306', '030601'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '31461216',
            nombres: 'ERINI',
            apellido_paterno: 'HUAMAN',
            apellido_materno: 'CARBAJAL',
            nombre_completo: 'HUAMAN CARBAJAL, ERINI',
            departamento: 'APURIMAC',
            provincia: 'CHINCHEROS',
            distrito: 'CHINCHEROS',
            direccion: 'ANEXO ORCCORBAMBA',
            direccion_completa: 'ANEXO ORCCORBAMBA, APURIMAC - CHINCHEROS - CHINCHEROS',
            ubigeo_reniec: '030701',
            ubigeo_sunat: '030601',
            ubigeo: ['03', '0306', '030601'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
        {
            numero: '31460841',
            nombres: 'PETRONILA',
            apellido_paterno: 'CARBAJAL',
            apellido_materno: 'DE HUAMAN',
            nombre_completo: 'CARBAJAL DE HUAMAN, PETRONILA',
            departamento: 'APURIMAC',
            provincia: 'CHINCHEROS',
            distrito: 'CHINCHEROS',
            direccion: 'ANEXO QUICHQUE',
            direccion_completa: 'ANEXO QUICHQUE, APURIMAC - CHINCHEROS - CHINCHEROS',
            ubigeo_reniec: '030701',
            ubigeo_sunat: '030601',
            ubigeo: ['03', '0306', '030601'],
            fecha_nacimiento: '',
            estado_civil: '',
            foto: '',
            sexo: ''
        },
    ]
}