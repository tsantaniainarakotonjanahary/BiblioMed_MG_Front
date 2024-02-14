import { Fragment, useEffect, useState } from 'react'
import { Row, Col, CardBody, CardText , CardTitle , Table , Button } from 'reactstrap'
import Card from '@components/card-snippet'
import {  CardHeader,  Form , FormGroup , Label , Input } from 'reactstrap'
import Downshift from 'downshift'
import '@src/assets/vendor/aos/aos.css';
import '@src/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '@src/assets/vendor/bootstrap/css/bootstrap.min.css';
import '@src/assets/vendor/boxicons/css/boxicons.min.css';
import '@src/assets/vendor/glightbox/css/glightbox.min.css';
import '@src/assets/vendor/swiper/swiper-bundle.min.css';
import '@src/assets/css/style.css';
import about from "@src/assets/img/about.jpg";

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
    fetch('http://localhost:4000/file/allfiles')
    .then(response => response.json())
    .then(data => setAllFiles(data))
    .catch(error => console.error(`Error fetching all files: ${error}`))

    fetch('http://localhost:4000/file/top10read')
      .then(response => response.json())
      .then(data => setTop10read(data))
      .catch(error => console.error(`Error fetching top 10 most read files: ${error}`))

    fetch('http://localhost:4000/file/filecount')
      .then(response => response.json())
      .then(data => setFileCount(data.fileCount))
      .catch(error => console.error(`Error fetching file count: ${error}`))

    fetch('http://localhost:4000/file/top10recent')
      .then(response => response.json())
      .then(data => setTop10recent(data))
      .catch(error => console.error(`Error fetching top 10 most recent files: ${error}`))
  }, [])



  return (
    <div  >
      
  <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center justify-content-between">
      <h1 className="logo"> <a href="index.html">Bibliomed</a> </h1>
      <nav id="navbar" className="navbar">
        <ul>
          <li> <a className="nav-link scrollto active" href="#hero"> Accueil </a> </li>
          <li> <a className="nav-link scrollto" href="#search"> Consulter  un fichier publique  </a> </li>
          <li> <a className="nav-link scrollto" href="#about"> A propos </a> </li>
          <li> <a className="nav-link scrollto" href="#services"> Service </a> </li>
          <li> <a className="nav-link scrollto" href="#contact"> Contact </a> </li>
          <li> <a className="getstarted scrollto" href="/login"> Se Connecter pour les access privés </a> </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
    </div>
  </header>

  <main id="main">
  <section id="hero" className="d-flex align-items-center">
    <div className="container-fluid" data-aos="fade-up">
      <div className="row justify-content-center">
      <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
        <h1>Découvrez Bibliomed, votre bibliothèque numérique sanitaire pour Madagascar</h1>
        <h2>
          Accédez facilement à une vaste collection de documents sanitaires, optimisez la gestion et l'utilisation des données, et améliorez la planification et la mise en œuvre des interventions en santé.
        </h2>
        <div>
          <a href="#search" className="btn-get-started scrollto">
            Commencer
          </a>
        </div>
      </div>
      </div>
    </div>
  </section>

  <section id="search" className="about">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay={150}
          >
        <Card title = "Recherche">
            <CardBody>
              <Downshift onChange={selection => console.log('selected item', selection)}
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
              <Form style = {{ height : "120px"}} >
                <FormGroup>
                  <Label {...getLabelProps()}>Thematique ou Sous-Thematique ou Nom de fichier</Label>
                  <Input placeholder="Thematique ou Sous-Thematique ou Nom de fichier" style = {{ height : "70px" ,borderRadius: '50px'}} {...getInputProps()} />
                </FormGroup>
              </Form>
              <Table>
              <tbody {...getMenuProps()}>
                {isOpen &&
                  getFilteredItems(inputValue).map((item, index) => (
                    <tr
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
                      <th scope="row"> {item.nom} </th> <td> {item.thematique} </td> <td> {item.sousThematique} </td> <td> <Button color="primary" href={item.lien} target="_blank">View</Button> </td>
                    </tr>
                  ))}
              </tbody>
              </Table>
            </div>
          )}
        </Downshift>
            </CardBody>
          </Card>
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

    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>1. Liste des Missions:</h2>
          <p>Contribuer à la mise en œuvre de la politique de la recherche dans les domaines de la santé à Madagascar 
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
        </div>
      </div>
    </section>
 
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
      </div>
    </section>

    <section id="faq" className="faq">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>FAQ</h2>
      <p>
        Bienvenue dans notre FAQ concernant la Bibliothèque Numérique du Système de Santé. Vous trouverez ci-dessous des réponses aux questions fréquemment posées.
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
            Quelles sont les restrictions d'accès à la Bibliothèque Numérique ?
            <i className="bx bx-chevron-down icon-show" />
            <i className="bx bx-chevron-up icon-close" />
          </a>
          <div
            id="faq-list-1"
            className="collapse show"
            data-bs-parent=".faq-list"
          >
            <p>
              L'accès à la Bibliothèque Numérique est réservé aux membres autorisés du personnel médical et de recherche du Système de Santé. Une identification et une authentification par des identifiants personnels sont nécessaires pour accéder aux ressources.
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
            Quelles sont les utilisations autorisées des ressources de la Bibliothèque Numérique ?
            <i className="bx bx-chevron-down icon-show" />
            <i className="bx bx-chevron-up icon-close" />
          </a>
          <div
            id="faq-list-2"
            className="collapse"
            data-bs-parent=".faq-list"
          >
            <p>
              Les ressources de la Bibliothèque Numérique peuvent être utilisées à des fins de recherche, d'éducation et de prise de décision clinique. Toute utilisation à des fins commerciales est strictement interdite.
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
            Comment signaler un problème technique ou de sécurité ?
            <i className="bx bx-chevron-down icon-show" />
            <i className="bx bx-chevron-up icon-close" />
          </a>
          <div
            id="faq-list-3"
            className="collapse"
            data-bs-parent=".faq-list"
          >
            <p>
              Pour signaler un problème technique ou de sécurité, veuillez contacter immédiatement l'équipe de support technique. Ils seront en mesure de vous aider à résoudre le problème.
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
            Les termes d'utilisation de la Bibliothèque Numérique peuvent-ils être modifiés ?
            <i className="bx bx-chevron-down icon-show" />
            <i className="bx bx-chevron-up icon-close" />
          </a>
          <div
            id="faq-list-4"
            className="collapse"
            data-bs-parent=".faq-list"
          >
            <p>
              Oui, le Système de Santé se réserve le droit de modifier les termes d'utilisation de la Bibliothèque Numérique à tout moment. Les utilisateurs seront informés des modifications apportées.
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
            Quelles sont les conséquences d'un non-respect des termes d'utilisation ?
            <i className="bx bx-chevron-down icon-show" />
            <i className="bx bx-chevron-up icon-close" />
          </a>
          <div
            id="faq-list-5"
            className="collapse"
            data-bs-parent=".faq-list"
          >
            <p>
              Tout manquement aux termes d'utilisation de la Bibliothèque Numérique peut entraîner la suspension ou la révocation de l'accès à la Bibliothèque Numérique, ainsi que des mesures disciplinaires supplémentaires conformément aux politiques en vigueur.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>


    <section id="contact" className="contact section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Nous contacter</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map" />
              <h3>Addresse</h3>
              <p>Ivandry Business Center </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-envelope" />
              <h3>Email </h3>
              <p>contact@example.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-phone-call" />
              <h3>Tel : </h3>
              <p>+261 38 66 261 00 </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 ">
            <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.417620922649!2d47.52582547492058!3d-18.868545482293708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f0872b276a4607%3A0xb8f19f7a35980208!2sAssist%20group!5e0!3m2!1sfr!2smg!4v1707787205761!5m2!1sfr!2smg" style={{ border: 0, width: "100%", height: 384 }} />
          </div>
          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form" >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Votre Nom" required="" />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Votre Email" required="" />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Sujet" required="" />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows={5} placeholder="Message" required="" defaultValue={""} />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Message Envoyé 
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Envoyer Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  </main>


  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-contact">
            <h3 style ={{color : "white"}} >Bibliomed</h3>
            <p>
              Ivandry <br />
              Antananarivo, Business Center 
              <br />
              Madagascar<br />
              <br />
              <strong>Phone:</strong> +261 38 66b 261 00
              <br />
              <strong>Email:</strong> info@example.com
              <br />
            </p>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <h4 style ={{color : "white"}} >Lien utiles </h4>
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
            </ul>
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
