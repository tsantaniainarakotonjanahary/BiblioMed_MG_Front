import { Fragment, useEffect, useState } from 'react'
import HashLoader from 'react-spinners/HashLoader'

import { Row, Col, CardBody, CardText , CardTitle , Table , Button } from 'reactstrap'
import { Menu, Circle, EyeOff, Folder, LifeBuoy, Shield , Home , Plus  , Loader , Share2 , BookOpen , Globe , Check , Eye } from 'react-feather'

import prism from 'prismjs'

import Card from '@components/card-snippet'
import Breadcrumbs from '@components/breadcrumbs'


import {  CardHeader,  Form , FormGroup , Label , Input } from 'reactstrap'

import Downshift from 'downshift'


import '@src/assets/vendor/aos/aos.css';
import '@src/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '@src/assets/vendor/bootstrap/css/bootstrap.min.css';
import '@src/assets/vendor/boxicons/css/boxicons.min.css';
import '@src/assets/vendor/glightbox/css/glightbox.min.css';
import '@src/assets/vendor/swiper/swiper-bundle.min.css';
import '@src/assets/css/style.css';


import heroImg from "@src/assets/img/hero-img.png";
import about from "@src/assets/img/about.jpg";
import features from "@src/assets/img/features.svg";
import testimonials1 from "@src/assets/img/testimonials/testimonials-1.jpg"
import testimonials2 from "@src/assets/img/testimonials/testimonials-2.jpg"
import testimonials3 from "@src/assets/img/testimonials/testimonials-3.jpg"
import testimonials4 from "@src/assets/img/testimonials/testimonials-4.jpg"
import testimonials5 from "@src/assets/img/testimonials/testimonials-5.jpg"

import portfolio1 from "@src/assets/img/portfolio/portfolio-1.jpg";
import portfolio2 from "@src/assets/img/portfolio/portfolio-2.jpg";
import portfolio3 from "@src/assets/img/portfolio/portfolio-3.jpg";
import portfolio4 from "@src/assets/img/portfolio/portfolio-4.jpg";
import portfolio5 from "@src/assets/img/portfolio/portfolio-5.jpg";
import portfolio6 from "@src/assets/img/portfolio/portfolio-6.jpg";
import portfolio7 from "@src/assets/img/portfolio/portfolio-7.jpg";
import portfolio8 from "@src/assets/img/portfolio/portfolio-8.jpg";
import portfolio9 from "@src/assets/img/portfolio/portfolio-9.jpg";

const Landing = () => {

  const [top10read, setTop10read] = useState([])
  const [fileCount, setFileCount] = useState(0)
  const [top10recent, setTop10recent] = useState([])

  const [allFiles, setAllFiles] = useState([])



  const searchFields = ['thematique', 'sousThematique', 'nom']

  const getFilteredItems = (value) => {
    if (!value) {
      return []
    }

    return allFiles.filter(file => {
      return searchFields.some(field => file[field]?.toLowerCase().includes(value.toLowerCase()))
    })
  }

  useEffect(() => {
    fetch('https://bibliotheque-medical-back.vercel.app/file/allfiles')
    .then(response => response.json())
    .then(data => setAllFiles(data))
    .catch(error => console.error(`Error fetching all files: ${error}`))

    fetch('https://bibliotheque-medical-back.vercel.app/file/top10read')
      .then(response => response.json())
      .then(data => setTop10read(data))
      .catch(error => console.error(`Error fetching top 10 most read files: ${error}`))

    fetch('https://bibliotheque-medical-back.vercel.app/file/filecount')
      .then(response => response.json())
      .then(data => setFileCount(data.fileCount))
      .catch(error => console.error(`Error fetching file count: ${error}`))

    fetch('https://bibliotheque-medical-back.vercel.app/file/top10recent')
      .then(response => response.json())
      .then(data => setTop10recent(data))
      .catch(error => console.error(`Error fetching top 10 most recent files: ${error}`))
  }, [])



  return (
    <div  >
      
  <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center justify-content-between">
      <h1 className="logo">
        <a href="index.html">Bibliomed</a>
      </h1>
      
     
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <a className="nav-link scrollto active" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#consulter">
              Consulter
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#about">
              A propos
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#services">
              Service
            </a>
          </li>
          
          
          <li>
            <a className="nav-link scrollto" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a className="getstarted scrollto" href="/login">
              Se Connecter
            </a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
    </div>
  </header>
  {/* End Header */}
  {/* ======= Hero Section ======= */}
  <section id="hero" className="d-flex align-items-center">
    <div className="container-fluid" data-aos="fade-up">
      <div className="row justify-content-center">
      <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
        <h1>Découvrez Bibliomed, votre bibliothèque numérique sanitaire pour Madagascar</h1>
        <h2>
          Accédez facilement à une vaste collection de documents sanitaires, optimisez la gestion et l'utilisation des données, et améliorez la planification et la mise en œuvre des interventions en santé.
        </h2>
        <div>
          <a href="#about" className="btn-get-started scrollto">
            Commencer
          </a>
        </div>
      </div>

        <div
          className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img"
          data-aos="zoom-in"
          data-aos-delay={150}
        >
          
        </div>
      </div>
    </div>
  </section>
  {/* End Hero */}
  <main id="main">


    
  <section id="consulter" className="about">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay={150}
          >
           

           
        <Card>
            <CardBody>
              <CardTitle tag='h5'>Recherche</CardTitle>
              <Downshift
          onChange={selection => console.log('selected item', selection)}
          itemToString={item => (item ? `${item.nom} - ${item.thematique} - ${item.sousThematique}` : '')}
        >
          {({
            getInputProps,
            getItemProps,
            getLabelProps,
            getMenuProps,
            isOpen,
            inputValue,
            highlightedIndex,
            selectedItem,
            getRootProps
          }) => (
            <div {...getRootProps({}, {suppressRefError: true})}>
              <Form>
                <FormGroup>
                  <Label {...getLabelProps()}>Thematique ou Sous-Thematique ou Nom de fichier</Label>
                  <Input {...getInputProps()} />
                </FormGroup>
              </Form>
              <ul {...getMenuProps()}>
                {isOpen &&
                  getFilteredItems(inputValue).map((item, index) => (
                    <li
                      {...getItemProps({
                        key: item._id,
                        index,
                        item,
                        style: {
                          backgroundColor:
                            highlightedIndex === index ? 'lightgray' : 'white',
                          fontWeight: selectedItem === item ? 'bold' : 'normal',
                        },
                      })}
                    >
                      {item.nom} - {item.thematique} - {item.sousThematique}
                      <Button color="primary" href={item.lien} target="_blank">View</Button>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </Downshift>
            </CardBody>
          </Card>
       

          </div>
         
        </div>
      </div>
    </section>
    
    
  <section id="consulter" className="about">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay={150}
          >
           
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
            data-aos="fade-right"
          >
           
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay={150}
          >
            <img src={about} className="img-fluid" alt="" />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
            data-aos="fade-right"
          >
            <h3>Contribuez à la recherche en santé à Madagascar</h3>

                <p className="fst-italic">
                  Notre plateforme sert à mettre en œuvre la politique de recherche dans les domaines de la santé, permettant de produire annuellement les Comptes Nationaux de Santé et de promouvoir les systèmes nationaux de gestion des connaissances.
                </p>

                <ul>
                  <li>
                    <i className="bi bi-check-circle" /> Assurez la mise en œuvre de la recherche opérationnelle.
                  </li>
                  <li>
                    <i className="bi bi-check-circle" /> Garantissez la production annuelle des Comptes Nationaux de Santé.
                  </li>
                  <li>
                    <i className="bi bi-check-circle" /> Déterminez les systèmes nationaux de gestion des connaissances.
                  </li>
                </ul>

                <h4>Résultats Attendus :</h4>
                <ul>
                  <li>
                    <i className="bi bi-check-circle" /> Mise en œuvre de la Recherche opérationnelle assurée.
                  </li>
                  <li>
                    <i className="bi bi-check-circle" /> Production annuelle des Comptes Nationaux de Santé garantie.
                  </li>
                  <li>
                    <i className="bi bi-check-circle" /> Systèmes Nationaux de Gestion des connaissances déterminées.
                  </li>
                </ul>

                <a href="#" className="read-more">
                  En savoir plus <i className="bi bi-long-arrow-right" />
                </a>

          </div>
        </div>
      </div>
    </section>


    {/* End About Section */}
    {/* ======= Counts Section ======= */}
    <section id="counts" className="counts">
  <div className="container">
    <div className="row counters">
      <div className="col-lg-4 col-6 text-center">
        <span data-purecounter-start={0} data-purecounter-end={99} data-purecounter-duration={1} className="purecounter" />
        <p>Nombre des documents répertoriés</p>
      </div>
      <div className="col-lg-4 col-6 text-center">
        <span data-purecounter-start={0} data-purecounter-end={18} data-purecounter-duration={1} className="purecounter" />
        <p>Nombre des thèmes traités</p>
      </div>
      <div className="col-lg-4 col-6 text-center">
        <span data-purecounter-start={0} data-purecounter-end={50} data-purecounter-duration={1} className="purecounter" />
        <p>Nombre des sujets traités</p>
      </div>
      <div className="col-lg-4 col-6 text-center">
        <span data-purecounter-start={0} data-purecounter-end={26} data-purecounter-duration={1} className="purecounter" />
        <p>Nombre des promoteurs répertoriés</p>
      </div>
      <div className="col-lg-4 col-6 text-center">
        <span data-purecounter-start={0} data-purecounter-end={67} data-purecounter-duration={1} className="purecounter" />
        <p>Nombre des sources de financement répertoriées</p>
      </div>
      <div className="col-lg-4 col-6 text-center">
        <span data-purecounter-start={0} data-purecounter-end={136} data-purecounter-duration={1} className="purecounter" />
        <p>Nombre des investigateurs principaux répertoriés</p>
      </div>
      <div className="col-lg-4 col-6 text-center">
        <span data-purecounter-start={0} data-purecounter-end={111} data-purecounter-duration={1} className="purecounter" />
        <p>Nombre des responsables scientifiques répertoriés</p>
      </div>
      <div className="col-lg-4 col-6 text-center">
        <span className="text">Logiciel de traitement des données utilisé: SPSS 20.0</span>
      </div>
    </div>
  </div>
</section>

   
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>1. Liste des Missions:</h2>
          <p>
          Contribuer à la mise en œuvre de la politique de la recherche dans les domaines de la santé à Madagascar
Assurer la production annuellement des Comptes Nationaux de santé
Promouvoir les systèmes nationaux de gestion des connaissances
          </p>
        </div>
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <div className="icon-box iconbox-blue">
              <div className="icon">
                <svg
                  width={100}
                  height={100}
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="none"
                    strokeWidth={0}
                    fill="#f5f5f5"
                    d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                  />
                </svg>
                <i className="bx bxl-dribbble" />
              </div>
              <h4>
                <a href="">Liste des Objectifs Globaux et Spécifiques:</a>
              </h4>
              <p>
              Disposer chaque année le document des comptes nationaux de santé et le produit de l’exploitation des recherches en santé pour une prise de décisions
Assurer la mise en œuvre de la recherche opérationnelle
Garantir la production annuelle des Comptes Nationaux de Santé
Déterminer les systèmes nationaux de gestion connaissances
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <div className="icon-box iconbox-orange ">
              <div className="icon">
                <svg
                  width={100}
                  height={100}
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="none"
                    strokeWidth={0}
                    fill="#f5f5f5"
                    d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
                  />
                </svg>
                <i className="bx bx-file" />
              </div>
              <h4>
                <a href="">Liste des Résultats Attendus:</a>
              </h4>
              <p>
              Mise en œuvre de la Recherche opérationnelle assurée
Production annuelle des Comptes Nationaux de Santé garantie
Systèmes Nationaux de Gestion des connaissances déterminées
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={300}
          >
            <div className="icon-box iconbox-pink">
              <div className="icon">
                <svg
                  width={100}
                  height={100}
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="none"
                    strokeWidth={0}
                    fill="#f5f5f5"
                    d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"
                  />
                </svg>
                <i className="bx bx-tachometer" />
              </div>
              <h4>
                <a href=""> Liste des Attributions:</a>
              </h4>
              <p>
              Mettre en œuvre la politique nationale de recherche en matière de santé
Contribuer à la mise en œuvre du Plan Stratégique de Recherche en santé
Créer les pools de formateurs en méthodologie de recherche opérationnelle
Mettre en place les bases de données de la recherche en santé
Elaborer le Plan de Travail Annuel du service
Disposer annuellement les Comptes Nationaux de Santé
Assurer le rapport d’enquête CNS
Former les responsables régionales sur la recherche en santé en vue de la mise en place de la culture de recherche à tous les niveaux
Participer à des ateliers ou réunions relatives au renforcement de capacités, organisées par les directions ou services centraux ou les partenaires
Former les responsables régionaux en matière de gestion des connaissances
Former les responsables régionaux et districts en matière de méthodologie de recherche opérationnelle
Identifier les thèmes de recherche en santé
Elaborer l’annuaire statistique de recherche en santé
Former les responsables sur le développement managérial du système de santé
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <div className="icon-box iconbox-yellow">
              <div className="icon">
                <svg
                  width={100}
                  height={100}
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="none"
                    strokeWidth={0}
                    fill="#f5f5f5"
                    d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"
                  />
                </svg>
                <i className="bx bx-layer" />
              </div>
              <h4>
                <a href="">Liste des Produits Livrables:</a>
              </h4>
              <p>
              Politique Nationale de Recherche pour la Santé
Plan stratégique de développement sur la recherche en santé
Thème de recherche prioritaire
Annuaire statistique de recherche en santé
Base de données de gestion des connaissances
Rapport d’enquête sur les comptes Nationaux de Santé
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <div className="icon-box iconbox-red">
              <div className="icon">
                <svg
                  width={100}
                  height={100}
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="none"
                    strokeWidth={0}
                    fill="#f5f5f5"
                    d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"
                  />
                </svg>
                <i className="bx bx-slideshow" />
              </div>
              <h4>
                <a href="">Liste des Outils de Gestion:</a>
              </h4>
              <p>
              Plan de Travail Annuel du service
Annuaire statistique de recherche en santé
Base de données de gestion des connaissances
Rapport d’enquête sur les comptes Nationaux de Santé
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={300}
          >
            <div className="icon-box iconbox-teal">
              <div className="icon">
                <svg
                  width={100}
                  height={100}
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="none"
                    strokeWidth={0}
                    fill="#f5f5f5"
                    d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"
                  />
                </svg>
                <i className="bx bx-arch" />
              </div>
              <h4>
                <a href="">Divera Don</a>
              </h4>
              <p>
                Modi nostrum vel laborum. Porro fugit error sit minus sapiente
                sit aspernatur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Services Section */}
    {/* ======= Features Section ======= */}
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Features</h2>
          <p>
          NOMBRE DES DOCUMENTS REPERTORIÉS: 99

NOMBRE DES THÈMES TRAITÉS : 18

NOMBRE DES SUJETS TRAITÉS : 50

NOMBRE DES PROMOTEURS REPERTORIÉS : 26

NOMBRE DES SOURCES DE FINANCEMENT REPERTORIÉES : 67

NOMBRE DES INVESTIGATEURS PRINCIPAUX REPERTORIÉS : 136

NOMBRE DES RESPONSABLES SCIENTIFIQUES REPERTORIÉS : 111

LOGICIEL DE TRAITEMENT DES DONNÉES UTILISÉ: SPSS 20.0
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-lg-center">
            <div
              className="icon-box mt-5 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <i className="bx bx-receipt" />
              <h4>Est labore ad</h4>
              <p>
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                laboris nisi ut aliquip
              </p>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <i className="bx bx-cube-alt" />
              <h4>Harum esse qui</h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt
              </p>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <i className="bx bx-images" />
              <h4>Aut occaecati</h4>
              <p>
                Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                maiores omnis facere
              </p>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <i className="bx bx-shield" />
              <h4>Beatae veritatis</h4>
              <p>
                Expedita veritatis consequuntur nihil tempore laudantium vitae
                denat pacta
              </p>
            </div>
          </div>
          <div
            className="image col-lg-6 order-1 order-lg-2 "
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <img src={features} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    {/* End Features Section */}
    {/* ======= Testimonials Section ======= */}
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Autres institutions publiques de recherche:</h2>
          <p>
          

- Centre National de Recherche sur l’Environnement;

- Institut National des Sciences et Technologies Nucléaires;

- Centre National de Recherche Océanographie.

Faculté de médecine (Antananarivo, Mahajanga, Toliara,
Toamasina, Antsiranana , Fianarantsoa)

Laboratoires: Labo IPM, Labo Rodolphe Mérieux, LAMM;

Comptes de la Santé (CS) 2010.
          </p>
        </div>
        <div
          className="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
                <img
                  src={testimonials1}
                  className="testimonial-img"
                  alt=""
                />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>
            {/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
                <img
                  src={testimonials2}
                  className="testimonial-img"
                  alt=""
                />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>
            {/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
                <img
                  src={testimonials3}
                  className="testimonial-img"
                  alt=""
                />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>
            {/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
                <img
                  src={testimonials4}
                  className="testimonial-img"
                  alt=""
                />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>
            {/* End testimonial item */}
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
                <img
                  src={testimonials5}
                  className="testimonial-img"
                  alt=""
                />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>
            {/* End testimonial item */}
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
    {/* End Testimonials Section */}
    {/* 
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src={portfolio1}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
              </div>
              <div className="portfolio-links">
                <a
                  href={portfolio1}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 1"
                >
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src={portfolio2}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
              </div>
              <div className="portfolio-links">
                <a
                  href={portfolio2}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Web 3"
                >
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src={portfolio3}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
              </div>
              <div className="portfolio-links">
                <a
                  href={portfolio3}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 2"
                >
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src={portfolio4}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
              </div>
              <div className="portfolio-links">
                <a
                  href={portfolio4}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Card 2"
                >
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src={portfolio5}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
              </div>
              <div className="portfolio-links">
                <a
                  href={portfolio5}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Web 2"
                >
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img
                src={portfolio6}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
              </div>
              <div className="portfolio-links">
                <a
                  href={portfolio6}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 3"
                >
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src={portfolio7}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
              </div>
              <div className="portfolio-links">
                <a
                  href={portfolio7}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Card 1"
                >
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img
                src={portfolio8}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
              </div>
              <div className="portfolio-links">
                <a
                  href={portfolio8}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Card 3"
                >
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img
                src={portfolio9}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
              </div>
              <div className="portfolio-links">
                <a
                  href={portfolio9}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="Web 3"
                >
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" title="More Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Portfolio Section */}
    {/* ======= Pricing Section ======= */}
    
    {/* End Pricing Section */}
    {/* ======= Frequently Asked Questions Section ======= */}
    <section id="faq" className="faq">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="faq-list">
          <ul>
            <li data-aos="fade-up" data-aos-delay={100}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-1"
              >
                Non consectetur a erat nam at lectus urna duis?{" "}
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-1"
                className="collapse show"
                data-bs-parent=".faq-list"
              >
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                  volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                  magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={200}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-2"
                className="collapsed"
              >
                Feugiat scelerisque varius morbi enim nunc?{" "}
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-2"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={300}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-3"
                className="collapsed"
              >
                Dolor sit amet consectetur adipiscing elit?{" "}
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-3"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                  nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                  pellentesque eu tincidunt. Lectus urna duis convallis
                  convallis tellus. Urna molestie at elementum eu facilisis sed
                  odio morbi quis
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-4"
                className="collapsed"
              >
                Tempus quam pellentesque nec nam aliquam sem et tortor
                consequat? <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-4"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo.
                  Dignissim suspendisse in est ante in. Nunc vel risus commodo
                  viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                  bibendum est. Purus gravida quis blandit turpis cursus in.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={500}>
              <i className="bx bx-help-circle icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-5"
                className="collapsed"
              >
                Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                turpis nunc eget lorem dolor?{" "}
                <i className="bx bx-chevron-down icon-show" />
                <i className="bx bx-chevron-up icon-close" />
              </a>
              <div
                id="faq-list-5"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris
                  vitae ultricies leo integer malesuada nunc vel. Tincidunt eget
                  nullam non nisi est sit amet. Turpis nunc eget lorem dolor
                  sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    {/* End Frequently Asked Questions Section */}
    {/* ======= Contact Section ======= */}
    <section id="contact" className="contact section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map" />
              <h3>Our Address</h3>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-envelope" />
              <h3>Email Us</h3>
              <p>contact@example.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-phone-call" />
              <h3>Call Us</h3>
              <p>+1 5589 55488 55</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 ">
            <iframe
              className="mb-4 mb-lg-0"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
              frameBorder={0}
              style={{ border: 0, width: "100%", height: 384 }}
              allowFullScreen=""
            />
          </div>
          <div className="col-lg-6">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* End Contact Section */}
  </main>
  {/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Bibliomed</h3>
            <p>
              A108 Adam Street <br />
              New York, NY 535022
              <br />
              United States <br />
              <br />
              <strong>Phone:</strong> +1 5589 55488 55
              <br />
              <strong>Email:</strong> info@example.com
              <br />
            </p>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Home</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">A propos</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Services</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Terms of service</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Web Design</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Web Development</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Product Management</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Marketing</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <form action="" method="post">
              <input type="email" name="email" />
              <input type="submit" defaultValue="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright-wrap d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>Bibliomed</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/Bibliomed-free-skin-bootstrap-3/ */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="#" className="twitter">
            <i className="bx bxl-twitter" />
          </a>
          <a href="#" className="facebook">
            <i className="bx bxl-facebook" />
          </a>
          <a href="#" className="instagram">
            <i className="bx bxl-instagram" />
          </a>
          <a href="#" className="google-plus">
            <i className="bx bxl-skype" />
          </a>
          <a href="#" className="linkedin">
            <i className="bx bxl-linkedin" />
          </a>
        </div>
      </div>
    </div>
  </footer>



    </div>
  )
}

export default Landing;
