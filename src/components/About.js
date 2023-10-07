import React from 'react'
 function About() {
    return ( 
        <div className="container">
  
  <p>
    <button
      className="btn btn-primary"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseWidthExample"
      aria-expanded="false"
      aria-controls="collapseWidthExample"
    >
      About US
    </button>
  </p>
  <div style={{ minHeight: 120 }}>
    <div className="collapse collapse-horizontal" id="collapseWidthExample">
      <div className="card card-body" style={{ width: 300 }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis recusandae, quia sapiente quos ipsam placeat non necessitatibus eveniet excepturi amet! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, reiciendis aspernatur. Dignissimos pariatur architecto, atque nemo incidunt quo distinctio aliquid reprehenderit, facere voluptatum, perferendis voluptatem sapiente cupiditate deserunt eius quidem?
      </div>
    </div>
  </div>
</div>
     );
 }
 
 export default About;