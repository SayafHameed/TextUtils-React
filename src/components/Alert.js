import React from "react";
function Alert(props) {
    const captilize=(word)=>{
     let lower=word.toLowerCase();
     return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
    <strong>{captilize(props.alert.typ)}:{props.alert.msg}</strong>
  {/* <button
    type="button"
    className="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  /> */}
</div>

  );
}

export default Alert;
