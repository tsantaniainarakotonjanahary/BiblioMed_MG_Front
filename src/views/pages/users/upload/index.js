import React, { useState, useRef, useEffect } from "react";
import { CardBody, CardText , CardTitle } from 'reactstrap'
import prism from 'prismjs'
import Card from '@components/card-snippet'
import Breadcrumbs from '@components/breadcrumbs'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import toast from 'react-hot-toast'
import { FormGroup, Label, Input, Button ,Row, Col, } from 'reactstrap';
import Avatar from '@components/avatar'
import { Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee, X } from 'react-feather'
import { Upload } from 'react-feather';
import { storage } from "../../../../configs/firebase/firebase";
import { Modal, ModalBody, ModalFooter } from 'reactstrap';


const ToastContent = ({ t, message }) => {
  return (
    <div className='d-flex'>
      <div className='me-1'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
      </div>
      <div className='d-flex flex-column'>
        <div className='d-flex justify-content-between' >
          <X size = {12} className = 'cursor-pointer' onClick={() => toast.dismiss(t.id)} />
        </div>
        <span>{message} </span>
      </div>
    </div>
  )
}

const TermsOfUseModal = ({ isLoadingUpload, handleUploadFile }) => {
  const [modal, setModal] = useState(false);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const scrollRef = useRef(null);
  const bottomRef = useRef(null);  // NEW: reference to bottom marker

  const toggle = () => {
    if (!isLoadingUpload) {
      setModal(!modal);
    }
  };

  useEffect(() => {
    const currentScrollRef = scrollRef.current;
    const currentBottomRef = bottomRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolledToBottom(entry.isIntersecting);
      },
      {
        root: currentScrollRef,
        threshold: 1.0,
      }
    );

    if (currentBottomRef) {
      observer.observe(currentBottomRef);
    }

    return () => {
      if (currentBottomRef) {
        observer.unobserve(currentBottomRef);
      }
    };
  }, []);

  // Reset scroll state when modal closes
  useEffect(() => {
    if (!modal) {
      setScrolledToBottom(false);
    }
  }, [modal]);

  return (
    <div>
      <Button color="danger" onClick={toggle}>Lire les termes d'utilisation</Button>
      <Modal isOpen={modal} toggle={toggle} scrollable={true}>
        <ModalBody ref={scrollRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem augue, venenatis a augue eu, facilisis porttitor metus. Phasellus porttitor libero et sagittis aliquam. In accumsan massa ut tempus tincidunt. Nunc facilisis in nulla vitae ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium fermentum fermentum. Nulla facilisi. Vestibulum placerat massa elementum massa scelerisque sodales. Nunc quis ipsum ligula. Nunc a tellus sed quam accumsan rutrum at vel magna. Curabitur pellentesque nunc justo, a vehicula odio viverra nec.

Nulla ac eros ut turpis posuere rutrum. Integer id suscipit odio, sit amet luctus libero. Vivamus luctus, quam in pellentesque dictum, risus nisi imperdiet orci, eget mattis arcu erat vitae libero. Sed tempor vel justo sit amet tempor. Integer libero erat, posuere quis consectetur nec, posuere non purus. Nullam augue est, aliquam non dignissim non, efficitur eget quam. Phasellus posuere justo nisi, in scelerisque mauris tincidunt porttitor.

Vivamus lacinia rhoncus mauris, non dapibus risus convallis a. Donec lacus dui, egestas id condimentum eu, mollis in justo. Sed aliquam lorem purus, sit amet condimentum lacus pharetra eu. Integer augue magna, commodo vitae nulla ac, pretium pretium orci. Proin consequat, ipsum eget porta auctor, mi magna ultricies ligula, id egestas ante magna ac magna. Integer condimentum vel orci sed tincidunt. Ut eleifend auctor mauris sit amet iaculis. Etiam id aliquam sem, nec finibus ligula. In id facilisis augue. Curabitur luctus neque vitae orci interdum, ut egestas nulla egestas. Nulla at nulla ante. Nunc viverra malesuada nisl in feugiat. Nunc vel varius nibh. Vestibulum eu ex sapien. Cras sit amet urna sem. Cras nisi elit, luctus id tempor eleifend, pellentesque sit amet purus.

Aliquam finibus diam ligula, vel lacinia arcu convallis in. Aliquam erat volutpat. Aliquam facilisis metus nec ipsum dignissim tincidunt. Proin ligula massa, aliquam non sollicitudin vitae, eleifend a purus. Vestibulum eu commodo ipsum. Nam quis tincidunt ex. Fusce blandit enim eget augue ornare pellentesque. Nullam et massa sed erat pretium iaculis. In hac habitasse platea dictumst. Nam ut aliquet sem, sit amet malesuada diam. Nunc non nibh non nibh venenatis malesuada. Vestibulum fringilla facilisis odio eget porttitor.

Praesent vitae metus sed nisl condimentum ultricies egestas id diam. Nulla sed tortor lacinia ante pharetra convallis sit amet sed massa. In ut hendrerit nunc. Duis ac mauris consectetur nulla egestas vehicula. Sed luctus erat ac hendrerit finibus. Vestibulum tincidunt dolor quam, eu lacinia orci sagittis nec. Integer ut suscipit ipsum. Nunc faucibus purus ut lectus dictum iaculis. Vestibulum venenatis arcu vel purus finibus consequat. Sed diam erat, egestas in sem id, blandit interdum massa. Mauris eu dolor gravida, feugiat massa vitae, vestibulum nibh. In elementum sapien ut ipsum vehicula feugiat. Pellentesque in iaculis ex. Pellentesque eu enim nisi.

Praesent massa mi, eleifend eu ornare at, pulvinar non odio. Integer mauris orci, placerat nec libero in, bibendum porta mi. Curabitur fringilla consectetur porta. Nunc venenatis ullamcorper nisi, nec dapibus ante porttitor vel. Sed consequat tempor enim, a interdum massa commodo sit amet. Nunc vehicula semper est et scelerisque. Nunc feugiat justo ac massa aliquet lacinia. Pellentesque elementum diam quis justo congue, a eleifend mauris porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Fusce bibendum pulvinar neque. Vivamus mollis non nulla vel semper. Phasellus ultricies, risus ut placerat tempor, erat justo scelerisque massa, ut pellentesque velit tellus ut lectus. Pellentesque aliquam mi sit amet tincidunt sagittis. Curabitur porttitor mi dignissim, facilisis nulla eget, vulputate mi. Pellentesque a metus facilisis, vestibulum ex non, feugiat nunc. Integer quis pellentesque leo. Donec a sem ornare tellus scelerisque finibus.

Nam sit amet purus tellus. Proin nisi ex, commodo quis quam vitae, aliquam iaculis sapien. Aliquam interdum metus purus, interdum pellentesque odio gravida id. Fusce id malesuada eros, eget rutrum metus. Aliquam erat volutpat. Praesent imperdiet turpis pulvinar risus molestie, a pretium turpis tempus. Morbi elementum eros sed malesuada vehicula. Integer posuere vel dolor et fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non dignissim diam. Pellentesque lobortis nec orci non consequat. Aliquam viverra augue eu mi cursus mattis. In rutrum metus eget libero sodales, in aliquam arcu cursus. Aliquam ultrices ante rutrum porttitor convallis. Integer dignissim aliquam molestie. Donec rutrum urna est, eu tristique turpis lobortis venenatis.

Donec ligula nisi, mollis in turpis eget, congue luctus urna. Donec dui magna, ullamcorper nec risus eu, pulvinar vulputate ex. Praesent vestibulum non ipsum vitae consectetur. Aenean eu est et lacus cursus aliquet ut in metus. Aliquam dignissim dolor nec tincidunt posuere. Etiam dapibus justo eget dolor scelerisque luctus. Curabitur sed bibendum nunc. Mauris euismod aliquam augue, a pellentesque lacus condimentum sed.

Sed condimentum ligula vestibulum metus dignissim convallis. Etiam nec risus ut lorem dapibus hendrerit nec in nisi. Donec pretium iaculis sapien quis elementum. Sed malesuada porttitor fermentum. Duis eu hendrerit metus, volutpat ornare diam. Vivamus interdum tortor nec libero volutpat, rhoncus pellentesque lacus aliquam. Donec sed iaculis leo. Aenean id sollicitudin odio. Aenean sagittis sapien vitae justo cursus commodo. Vestibulum sed finibus quam. Fusce eu elit lectus. Vivamus sed ex tempus, egestas leo at, maximus nibh.

Sed varius eget quam mattis facilisis. Nulla nec semper odio. Nam varius blandit velit. Phasellus a sodales lacus. Proin non vulputate neque. Maecenas facilisis ultricies pretium. Ut nec mi a risus egestas venenatis. Phasellus vitae auctor metus, eget porttitor sapien. Vivamus ut consequat mauris. Nullam in euismod quam. Fusce ut malesuada arcu. Vestibulum eu sollicitudin risus. In interdum tempus felis, ac sodales mauris interdum nec. Mauris ultricies tincidunt eros eu ultricies. Sed eu tristique neque.

Nulla venenatis tellus quis purus sagittis, quis semper lectus aliquet. Nam molestie tortor sit amet nulla scelerisque, ut ullamcorper velit ullamcorper. Vestibulum posuere lorem et tellus finibus venenatis. Duis sollicitudin est maximus, luctus velit ut, sollicitudin magna. Nam id lobortis velit. Etiam mattis leo velit, ac rhoncus felis elementum et. Phasellus sodales, nisi ut laoreet ultrices, velit lacus sagittis dui, ut finibus massa nisi at metus. Nunc gravida condimentum neque nec rhoncus. Vivamus nulla leo, aliquam volutpat venenatis eget, volutpat placerat elit.

Praesent finibus magna mi, vel maximus justo malesuada at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam hendrerit massa mattis dui elementum, a accumsan velit posuere. Aenean vulputate ligula massa, at blandit massa commodo vel. Morbi neque metus, eleifend sed ultricies sed, vehicula eget magna. Quisque interdum massa ante, eget elementum augue commodo ac. Nulla in fermentum nunc. Proin elementum imperdiet sapien eget lobortis. Donec et justo vel sem commodo malesuada id nec ex. Ut consectetur diam neque, eget vulputate sem gravida id. Morbi sed lectus id mi pretium scelerisque quis vel augue. Aenean porttitor leo at porta malesuada. Integer viverra quis libero eu tempor. Sed bibendum pulvinar urna, sit amet tincidunt metus vehicula id. Etiam tempus, metus ac sodales sagittis, metus orci efficitur metus, eget varius ex magna eu metus.

Donec interdum purus non mauris vulputate, et lobortis metus cursus. Morbi non accumsan dolor. Ut nec tortor condimentum, volutpat tellus vitae, condimentum metus. Vivamus pretium sem dolor, quis aliquam ipsum ornare ut. Quisque feugiat, neque quis volutpat mollis, sem urna pellentesque quam, vel elementum leo sem sit amet magna. Morbi scelerisque congue ex, a bibendum nibh dapibus id. Aliquam sed dapibus purus. Quisque volutpat lacus a aliquet dapibus. Donec sodales vel nisl at finibus. Nulla facilisis orci id est pharetra, id tempus tellus mattis. Nunc suscipit elit lectus, congue rutrum turpis euismod et. Etiam ultrices ligula a tristique ultrices. Phasellus tempor a neque lacinia vulputate. Mauris sed dapibus ligula, non placerat ante.

Quisque a porta massa, in efficitur quam. Nunc tincidunt tortor ante, eget condimentum erat tempus vitae. Integer mattis lectus tortor, quis ornare sem luctus et. Vestibulum diam ipsum, tincidunt a massa id, hendrerit tempor quam. Donec odio lorem, tincidunt sed nisi et, sodales mattis nisl. Pellentesque tempor mi iaculis dignissim interdum. Nam scelerisque tincidunt eleifend. Nam libero tellus, pretium sed ante eget, egestas vestibulum velit. Nam nec lorem lectus. Phasellus consequat iaculis neque sodales dignissim. Maecenas gravida aliquet dolor, eget accumsan arcu mollis vel. Nulla facilisi. Integer cursus laoreet justo id mollis. Donec gravida lacinia nulla eget maximus. Phasellus ut sem metus. Praesent venenatis maximus tortor ut elementum.

Quisque lectus lorem, volutpat quis ex at, sodales varius leo. Nullam et elit lectus. Curabitur vulputate vestibulum enim sit amet tincidunt. Donec bibendum nisl nulla, non finibus nibh accumsan sit amet. Nullam sit amet tortor tincidunt, ornare nisl id, blandit libero. Sed luctus fringilla massa eget suscipit. In ut arcu dapibus, tincidunt libero vitae, sollicitudin libero. Proin posuere eu neque id fermentum. Nunc ac velit eu nibh posuere porta eu nec ex. Donec at elit sit amet tellus maximus maximus eu non quam. Nunc placerat nisi ut lacus luctus, id scelerisque purus dignissim. Morbi eu est ac dui dapibus vulputate eget non eros. Praesent feugiat mollis neque at egestas. Mauris elementum, enim a tincidunt pretium, mauris lacus iaculis nisl, imperdiet gravida neque magna quis est. Pellentesque at rutrum justo, consequat tincidunt dui. Mauris semper purus a arcu feugiat, vel porta lorem sollicitudin.

Curabitur in finibus nibh, eleifend sagittis lacus. Morbi ut vestibulum lectus. Donec eu pharetra ipsum. In hac habitasse platea dictumst. Nullam consequat dolor at vestibulum egestas. Integer accumsan lacus nec purus mattis, a vehicula orci ultricies. Sed faucibus quam ut libero laoreet euismod. Sed pretium venenatis tempus. Aliquam sed mauris vitae ante gravida tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed lobortis ac lacus et maximus. Cras ac mauris aliquam, consequat arcu quis, accumsan nunc. Suspendisse vitae pretium velit, sit amet rutrum elit. Nunc viverra tempor fermentum.

Vivamus id imperdiet lorem. Etiam et urna vel velit tempus lobortis vitae a urna. Donec sapien ex, molestie in elementum sit amet, sollicitudin pellentesque odio. Etiam id velit ac massa condimentum gravida. Aenean at odio sit amet erat malesuada ornare a eu mauris. Phasellus nec diam sed justo vestibulum blandit. Donec aliquet ex et orci pharetra, ut vehicula ex egestas. Curabitur iaculis sed velit et pellentesque. Vestibulum aliquam consectetur sodales. Quisque rhoncus varius sollicitudin. Nam id tincidunt ex. Integer vitae ornare nisl, quis mollis lacus. Praesent convallis nec arcu sed maximus. Proin finibus lorem arcu, in lacinia dolor porttitor fermentum.

Mauris elementum vitae arcu at porttitor. Proin pellentesque tortor id fermentum tincidunt. Donec suscipit ex sed mattis commodo. Morbi quis justo viverra, hendrerit neque vel, lobortis felis. Proin molestie sodales metus, porttitor lobortis enim tristique a. Suspendisse consectetur nulla a molestie placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed massa dolor, congue a leo quis, ultricies ornare turpis. Morbi vehicula egestas diam sed ultricies. Duis nec mattis nisi. Ut quam enim, molestie ut pretium fringilla, rhoncus non nunc. Donec tempor ullamcorper ultricies. Quisque et dictum orci, at commodo justo. Morbi suscipit orci ac pharetra sodales. Morbi pellentesque velit sapien, sit amet euismod sem convallis dictum.

Nam nec mattis nisl, a placerat ligula. Praesent a enim tincidunt, tincidunt eros vel, tempus odio. Suspendisse vestibulum, odio vel egestas laoreet, nunc risus tempor dolor, non ornare arcu ante ut neque. Nullam at vehicula erat. Nam ullamcorper laoreet nulla vitae volutpat. Pellentesque semper, libero eget egestas iaculis, erat orci sagittis ligula, eu ornare metus elit id nisl. In hac habitasse platea dictumst. Aliquam ac placerat ligula, eget fringilla nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vehicula sit amet turpis at placerat. Etiam condimentum vitae lectus et tempus. Nunc sit amet gravida nulla. Duis vel iaculis ipsum, ut viverra purus. Quisque nec congue dolor. Praesent dapibus diam a sollicitudin imperdiet. Pellentesque vel efficitur velit.
          <div ref={bottomRef}></div>  {/* NEW: bottom marker */}
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
          
            onClick={() => {
                handleUploadFile();
                toggle();
            }}
          >
            {isLoadingUpload ? "LOADING" : <Upload />}
          </Button>
          <Button color="secondary" onClick={toggle}>Annuler</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};





const UploadPage = () => {
  const [fileUpload, setFileUpload] = useState(null);
  const hiddenFileInput = useRef(null);
  const [entities,setEntities] = useState([]);
  const [visibilite, setVisibilite] = useState([]);
  const [thematiques, setThematiques] = useState([]); // NEW: For storing all thematiques
  const [selectedThematique, setSelectedThematique] = useState(''); // NEW: For storing selected thematique
  const [sousThematiques, setSousThematiques] = useState([]); // NEW: For storing all sousThematiques
  const [filteredSousThematiques, setFilteredSousThematiques] = useState([]); // NEW: For storing sousThematiques based on selected thematique
  const [selectedSousThematique, setSelectedSousThematique] = useState('');

  // NEW: useEffect to fetch thematiques and sousThematiques
  useEffect(() => {
    const getThematiques = async () => {
        fetch(`https://bibliotheque-medical-back.vercel.app/thematique`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token" : localStorage.getItem("token"),
            }
        }).then((response) => response.json()).then((data) => { setThematiques(data); }).catch((error) => { console.error(error); })
    }

    const getSousThematiques = async () => {
        fetch(`https://bibliotheque-medical-back.vercel.app/sousThematique`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token" : localStorage.getItem("token"),
            }
        }).then((response) => response.json()).then((data) => { setSousThematiques(data); }).catch((error) => { console.error(error); })
    }

    getThematiques();
    getSousThematiques();
  }, [])

  useEffect(() => {
    
    const filtered = sousThematiques.filter(sousThematique => sousThematique.idThematique === selectedThematique.split("/")[0]);
    setFilteredSousThematiques(filtered);
  }, [selectedThematique, sousThematiques]);


  const handleSelectThematiqueChange = (event) => {
    console.log(event.target.value);
    setSelectedThematique(event.target.value);
  };


  useEffect(() => {
      const getEntities = async () => {
          fetch(`https://bibliotheque-medical-back.vercel.app/entite`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "x-auth-token" : localStorage.getItem("token"),
              }
          }).then((response) => response.json()).then((data) => { setEntities(data); }).catch((error) => { console.error(error); })
      }
      getEntities();
  },[])
  
  const [isLoadingUpload, setIsLoadingUpload] = useState(false);
  const [description,setDescription] = useState("");
  const [titre,setTitre] = useState("");

  const handleUploadFile = () => {
    setIsLoadingUpload(true);
    if (fileUpload == null) return;
    const fileRef = ref(storage, `${fileUpload.name + v4()}`);
    uploadBytes(fileRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((fileUrl) => {
        fetch(`https://bibliotheque-medical-back.vercel.app/file`, {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-auth-token" : localStorage.getItem("token"), },
          body: JSON.stringify({
            lien: fileUrl,
            nom: fileUpload.name,
            titre : titre,
            description : description , 
            visibilite,
            thematique : selectedThematique.split("/")[1] ,
            idThematique : selectedThematique.split("/")[0],
            sousThematique : selectedSousThematique.split("/")[1],
            idSousThematique : selectedSousThematique.split("/")[0]
          }),
        }).then((response) => response.json()).then((data) => { console.log(data);  
          toast(t => (
              <ToastContent t={t} message={data.message}  />
          )) }).catch((error) => { console.error(error); })
      });
    });
  };
  
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChangeUploadedFile = (event) => {
    const fileUploaded = event.target.files[0];
    setFileUpload(fileUploaded);
  };

  const handleSelectSousThematiqueChange = (event) => {
    console.log('Selected option:', event.target.value);
    setSelectedSousThematique(event.target.value);
  };

  const handleCheckboxChange = (event) => {
      const entityId = event.target.value;
      const isChecked = event.target.checked;
  
      if (isChecked) {
        setVisibilite([...visibilite, entityId]);
      } else {
        setVisibilite(visibilite.filter(id => id !== entityId));
      }
    }


    console.log(thematiques);
  
    return (
      <div style={{width : "100%"}}>

          <FormGroup>
            <Label for="dropdownSelectThematique">Thematique :</Label>
            <Input type="select" name="dropdownSelectThematique" id="dropdownSelectThematique" onChange={handleSelectThematiqueChange}>
              <option value="">Sélectionnez une Thematique</option>
              {thematiques.map(({ _id, nom }) => (
                <option key={_id} value={_id+"/"+nom}>{nom}</option>
              ))}
            </Input>
          </FormGroup>

          // Updated FormGroup for Sous-thematique
          <FormGroup>
            <Label for="dropdownSelectSousThematique">Sous-thematique :</Label>
            <Input type="select" name="dropdownSelectSousThematique" id="dropdownSelectSousThematique" onChange={handleSelectSousThematiqueChange}>
              <option value="">Sélectionnez une sous-thematique</option>
              {filteredSousThematiques.map(({ _id, nom },index) => (
                <option key={index} value={_id+"/"+nom}>{nom}</option>
              ))}
            </Input>
          </FormGroup>

        <FormGroup>
          <Label>Visibilite par entite</Label>
          {entities.map(({ _id, nom }) => (
            <FormGroup check inline key={_id}>
              <Label check>
                <Input
                  type="checkbox"
                  id={_id}
                  value={_id}
                  checked={visibilite.includes(_id)}
                  onChange={handleCheckboxChange}
                />
                {nom}
              </Label>
            </FormGroup>
          ))}
        </FormGroup>



        <FormGroup>
    <Label for="description">Description</Label>
    <Input type="textarea" name="description" id="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} />
    </FormGroup>

    <FormGroup>
    <Label for="titre">Titre</Label>
    <Input type="textarea" name="titre" id="titre" rows="1" value={titre} onChange={(e) => setTitre(e.target.value)} />
    </FormGroup>

      <h3>Upload</h3>
        <Button onClick={handleClick} outline>
          <Upload size={16} />
          <span style={{ marginLeft: 10 }}>
            {fileUpload ? fileUpload?.name : "Choisissez un fichier à uploader ..."}
          </span>
        </Button>
        <br />
        <br />
        <br />
        <input type="file" ref={hiddenFileInput} style={{ display: "none" }} onChange={handleChangeUploadedFile} />
        {fileUpload ? (
          <div>
            <TermsOfUseModal isLoadingUpload = {isLoadingUpload} handleUploadFile={handleUploadFile} />
             
              <br/> <br/> 
          </div>
        ) : (
          <Button disabled style={{ backgroundColor: "#d7d7d7", color: "#9d9d9d" }}>
            <Upload />
          </Button>
        )}
    </div>
  )
}

export default UploadPage;



const DirectoryInput = ({ value, onChange }) => {
  return (
    <Input type="text" value={value} onChange={onChange} style={{ marginBottom: '10px' }} />
  );
};

const DirectoryInputs = ({ directory, setDirectory }) => {
  const elements = directory.split("/");
  const onChange = (index, value) => {
    elements[index] = value;
    setDirectory(elements.join("/"));
  };

  const onAddSubdirectory = () => {
    setDirectory(directory + "/");
  };

  return (
    <div>
      {elements.map((element, index) => (
        <DirectoryInput key={index} value={element} onChange={(e) => onChange(index, e.target.value)} />
      ))}
      <Button color="primary" onClick={onAddSubdirectory} style={{ marginTop: '10px' }}>
        Ajouter une categorie our sous categorie pour repertorier les fichier 
      </Button>
      <br/>
    </div>
  );
};

