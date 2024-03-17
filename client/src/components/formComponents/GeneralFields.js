import React from "react";
import Input from "../customizedComponents/Input";

export default function GeneralFields(props) {
  return (
    <div className="flex w-full gap-2 mx-auto">
      <div className="flex flex-col mx-auto">
        <Input
          for="title"
          name="title"
          id="title"
          placeholder="Title"
          text="Title"
          value={props.formData.title}
          handleChange={props.handleChange}
        />
        <Input
          for="date_production"
          name="date_production"
          id="date_production"
          placeholder="Date Production"
          text="Date Production"
          value={props.formData.date_production}
          handleChange={props.handleChange}
        />
        <Input
          for="productors"
          name="productors"
          id="productors"
          placeholder="Productors"
          text="Productors"
          value={props.formData.productors}
          handleChange={props.handleChange}
        />
        <Input
          for="nbr_invoice"
          name="nbr_invoice"
          id="nbr_invoice"
          placeholder="Nbr Invoice"
          text="Nbr Invoice"
          value={props.formData.nbr_invoice}
          handleChange={props.handleChange}
        />
        <Input
          for="nbr_contract"
          name="nbr_contract"
          id="nbr_contract"
          placeholder="Nbr Contract"
          text="Nbr Contract"
          value={props.formData.nbr_contract}
          handleChange={props.handleChange}
        />
      </div>
      <div className="flex flex-col mx-auto">
        <Input
          for="type_support"
          name="type_support"
          id="type_support"
          placeholder="Type Support"
          text="Type Support"
          value={props.formData.type_support}
          handleChange={props.handleChange}
        />
        <Input
          for="nbr_support"
          name="nbr_support"
          id="nbr_support"
          placeholder="Nbr Support"
          text="Nbr Support"
          value={props.formData.nbr_support}
          handleChange={props.handleChange}
        />
        <Input
          for="tech_comments"
          name="tech_comments"
          id="tech_comments"
          placeholder="Tech Comments"
          text="Tech Comments"
          value={props.formData.tech_comments}
          handleChange={props.handleChange}
        />
        <Input
          for="quality"
          name="quality"
          id="quality"
          placeholder="Quality"
          text="Quality"
          value={props.formData.quality}
          handleChange={props.handleChange}
        />
        <Input
          for="language"
          name="language"
          id="language"
          placeholder="Language"
          text="Language"
          value={props.formData.language}
          handleChange={props.handleChange}
        />
      </div>
      <div className="flex flex-col mx-auto">
        <Input
          for="frequency"
          name="frequency"
          id="frequency"
          placeholder="Frequency"
          text="Frequency"
          value={props.formData.frequency}
          handleChange={props.handleChange}
        />
        <Input
          for="format"
          name="format"
          id="format"
          placeholder="Format"
          text="Format"
          value={props.formData.format}
          handleChange={props.handleChange}
        />
        <Input
          for="synopsis"
          text="synopsis"
          name="synopsis"
          id="synopsis"
          placeholder="Synopsis"
          value={props.formData.synopsis}
          handleChange={props.handleChange}
        />
        <Input
          for="version"
          name="version"
          id="version"
          placeholder="Version"
          text="Version"
          value={props.formData.version}
          handleChange={props.handleChange}
        />
        <Input
          for="sequence"
          name="sequence"
          id="sequence"
          placeholder="Sequence"
          text="Sequence"
          value={props.formData.sequence}
          handleChange={props.handleChange}
        />
      </div>
    </div>
  );
}
