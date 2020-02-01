import React from 'react';

function AboutModal() {
    return (
      <div>
        <header>
          <h3>About Me</h3>
        </header>
        <section>
          <div className="row">
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/nitish.jpg"}
                alt="Nitish Pic"
                height="150"
              />
            </div>
            <div className="col-md-6">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with
              </p>
            </div>
          </div>
        </section>
      </div>
    );
}

export default AboutModal;