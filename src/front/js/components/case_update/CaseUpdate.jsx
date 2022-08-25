import React from "react";

const CaseUpdate = () => {
  return (
    <div id="actualizaciones-del-caso">
      <div className="d-flex justify-content-between">
        <h6 className="fw-bold my-3">Actualizaciones del caso</h6>
        <button
          className="btn link-primary"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          + Crear una nueva actualizacion
        </button>
      </div>
      <div className="row">
        {/* Collapser */}
        <div className="collapse my-2 mb-4" id="collapseExample">
          <div className="border rounded p-3">
            <label htmlFor="">Titulo</label>
            <input type="text" className="form-control" />
            <label htmlFor="">Descripcion</label>
            <textarea
              name="form-control"
              className="form-control"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <label htmlFor="">Subir Archivos</label>
            <input
              className="form-control"
              type="file"
              id="formFileMultiple"
              multiple
            />
            <br />
            <button className="btn btn-primary btn-sm">
              Guardar Actualizacion
            </button>
            <button
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              className="btn link-danger btn-sm"
            >
              Cancelar
            </button>
          </div>
        </div>

        {/* Comienza el acordeon */}
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <div className="d-flex justify-content-between w-100">
                  <span className="fw-semibold">
                    Revision de documentos relacionados al litigio
                  </span>
                  <small className="text-muted pt-1 me-3">19/04/2022</small>
                </div>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <label htmlFor="">Descripcion</label>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit adipisci vero quam. Eum atque hic quasi accusamus
                  quod tenetur sint distinctio numquam accusantium dolorum
                  eligendi officia repellendus, expedita perspiciatis. Fugiat
                  harum ad eum consequuntur numquam aut non error provident
                  laborum, voluptatem molestiae natus recusandae atque, sit
                  quibusdam temporibus aperiam ipsum? Id repellendus laboriosam
                  beatae dolorum aliquam ut sapiente optio non expedita eum
                  minima hic ipsum quibusdam quas consectetur quos, velit quis
                  mollitia assumenda dolorem neque quisquam odio harum sunt!
                  Incidunt explicabo dolorem maxime recusandae aliquam officia
                  quasi facilis in autem, reprehenderit sit porro asperiores
                  quia nulla, unde, sed commodi quos ad suscipit delectus
                  provident enim odit. <br /> <br /> Obcaecati alias minima
                  maxime amet ex error quas, suscipit tenetur illum laudantium
                  perspiciatis, dicta consequuntur ea at porro. Doloribus ipsam
                  officiis laboriosam blanditiis perspiciatis velit sit quidem
                  non aut aspernatur ex, facere atque ipsum, odio exercitationem
                  tempora laborum amet est, nihil mollitia eveniet nobis
                  repellendus obcaecati quos? Corrupti delectus nemo modi
                  suscipit dicta velit iusto, maxime, dolorem vitae ipsa harum
                  hic rem quos dolores adipisci ducimus placeat eligendi unde
                  deleniti? Dolorem iusto pariatur sequi adipisci cum sapiente
                  repellat obcaecati placeat esse necessitatibus, enim numquam
                  magni quaerat. Omnis error illo qui eum accusamus soluta,
                  totam officiis suscipit cumque in accusantium modi molestiae
                  animi atque possimus neque amet! Molestias totam eligendi,
                  excepturi veritatis necessitatibus praesentium modi! Provident
                  possimus voluptate perferendis quos, ex autem iusto culpa. Et
                  ea hic fugiat quos magnam officia! Nobis magni aspernatur,
                  quae ratione blanditiis sed eligendi neque eum mollitia amet
                  officiis autem aut quibusdam nesciunt nihil soluta harum qui
                  ea perferendis optio, illum sequi! Quisquam recusandae
                  nesciunt tempore eaque tenetur veniam architecto dolor harum,
                  explicabo vero tempora animi illo aspernatur nobis, temporibus
                  quidem earum placeat consequatur exercitationem veritatis.
                  Temporibus ea dicta est repudiandae unde sint ad recusandae
                  facere officiis veniam laboriosam quibusdam necessitatibus
                  accusamus, fuga laborum dolor beatae sit aperiam? Quisquam
                  totam sint blanditiis ex tempora modi corrupti quia. Magnam
                  enim vel expedita modi reprehenderit laboriosam id tenetur
                  mollitia commodi tempora perferendis, dolorem maiores ducimus
                  architecto dolor? Minima dolor, quaerat blanditiis magnam
                  sequi voluptatem eius quis rerum, nostrum dolorum et numquam
                  tempora sapiente corporis fugiat omnis? Eaque exercitationem
                  deleniti nihil accusantium asperiores quos temporibus pariatur
                  nostrum, sunt consectetur quibusdam? Temporibus id rerum, nemo
                  placeat dolore reiciendis ullam sapiente et illo quae labore
                  quaerat tenetur earum perspiciatis cupiditate? Porro illo
                  ullam exercitationem quibusdam distinctio sed veritatis nulla
                  quisquam eos. Vel dignissimos hic nam?
                </p>
                <label htmlFor="">Archivos</label>
                <div className="row">
                  <div className="col-3">
                    <div className="d-flex">
                      <img
                        src="https://www.howtogeek.com/wp-content/uploads/2020/04/preview_pane_2.png?trim=1,1&bg-color=000&pad=1,1"
                        alt=""
                        className="me-2"
                        width={50}
                        height={70}
                        style={{ objectFit: "cover" }}
                      />
                      <div>
                        <p className="fw-semibold m-0">Prueba numero 1.jpg</p>
                        <span
                          className="text-muted"
                          style={{ fontSize: 0.75 + "rem" }}
                        >
                          148 kb
                        </span>
                        <button
                          className="btn link-danger d-block p-0"
                          style={{ fontSize: 0.75 + "rem" }}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className=" d-flex">
                      <img
                        src="https://www.howtogeek.com/wp-content/uploads/2020/04/preview_pane_2.png?trim=1,1&bg-color=000&pad=1,1"
                        alt=""
                        className="me-2"
                        width={50}
                        height={70}
                        style={{ objectFit: "cover" }}
                      />
                      <div>
                        <p className="fw-semibold m-0">Prueba numero 1.jpg</p>
                        <span
                          className="text-muted"
                          style={{ fontSize: 0.75 + "rem" }}
                        >
                          148 kb
                        </span>
                        <button
                          className="btn link-danger d-block p-0"
                          style={{ fontSize: 0.75 + "rem" }}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* fin acordeon */}
        </div>
      </div>
    </div>
  );
};

export default CaseUpdate;
