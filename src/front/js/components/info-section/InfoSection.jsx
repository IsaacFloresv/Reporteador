import React from "react";
import image from "../../../../../public/assets/create-and-edit.png";

const InfoSection = () => {
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 col-lg order-1">
            <img src={image} alt="image" style={{ width: 100 + "%" }} />
          </div>
          <div className="col order-2 px-4">
            <p className="m-0 mb-3 fw-semibold text-primary">
              Todo Lo Que Necesitas
            </p>
            <h2 className="fw-bold mb-3">¿Por Que Usar DropCases?</h2>
            <p className=" mb-4 text-muted lh-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              aut deleniti possimus. Temporibus, sequi commodi ducimus quasi at
 info-section copy             nulla dolore a sapiente distinctio reiciendis quia. Iste obcaecati
              itaque quod magnam quis totam fuga, suscipit atque nihil pariatur
              corrupti dignissimos nisi nulla doloribus provident illo quam
              praesentium sint non voluptatum sit vero dolores dolor? Obcaecati
              delectus fugit incidunt cumque animi eum nisi velit quo quam earum
              id veniam tempora optio doloremque, enim illo. Voluptatibus natus
              praesentium totam libero earum ipsam nobis! Consectetur doloribus
              ipsam quo optio dolore suscipit quia dignissimos! Aut dicta saepe
              tenetur maiores ex eaque. Voluptatibus deleniti praesentium
              doloribus nobis?
            </p>
            <button className="btn btn-primary">Probar Gratis</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
