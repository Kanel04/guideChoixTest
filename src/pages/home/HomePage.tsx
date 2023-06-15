
import { useState } from "react";
import LinkButton from "../../components/button/LinkButton";
import { LinkButtonSecondary } from "../../components/button/LinkButtonSecondary";
import Input from "../../components/input/Input";
import Select from "../../components/input/SelectInput"
import { Navbar } from "../../components/navbar/Navbar"
import "./Home.css"
function HomePage() {
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };
  const options = [
    { value: 'Madagascar', label: 'Madagascar' },
    { value: 'Congo', label: 'Congo' },
    { value: 'Suisse', label: 'Suisse' },
   
  ];


  const contentNavbar = (
  <div className="navbar">
<div className="logo">
University Socity
</div>
<div className="select">
  <label className="label" >Pays :</label>
<Select options={options}  className="selectinput" value={selectedOption} onChange={handleOptionChange} ></Select>
</div>

<div  className="primary">
  <LinkButton to="/create" text="Commencer"></LinkButton>
  </div>
  <div  className="secondary">
  <LinkButtonSecondary to="/edit" text="Modification"></LinkButtonSecondary>
  </div>

  </div>
)
  return (
    <>
      <Navbar content={contentNavbar}></Navbar>
      <div className="inputcard">
        <Input type="text" className="input" placeholder="Votre recherche"></Input>
      </div>
    </>
  )
}

export default HomePage