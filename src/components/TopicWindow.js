import React, { useState } from "react";
import { connect } from "react-redux";
import { openTopicWindow } from "../actions";

function TopicWindow(props) {
  const pagesCount = 4;

  const [infoCarouselPosition, setInfoCarouselPosition] = useState(1);

  const buttonBackClicked = () => {
    let topicWindow = { topicWindowOpen: false };
    props.openTopicWindow(topicWindow);

    setTimeout(function () {
      setInfoCarouselPosition(1);
    }, 700);
  };

  const infoCarouselClicked = (direction) => {
    if ((direction === -1 && infoCarouselPosition !== 1) || (direction === 1 && infoCarouselPosition !== pagesCount)) {
      setInfoCarouselPosition(infoCarouselPosition + direction);
    }
  };

  return (
    <div
      className="window-container topic-window-container"
      style={{ opacity: props.topicWindowOpen ? 1 : 0, zIndex: props.topicWindowOpen ? 5 : 1 }}
    >
      <div className="content">
        <div className="title">
          <div className="btn btn-back" onClick={() => buttonBackClicked()}></div>Muziejaus pavadinimas
        </div>
        <div className="info-header">
          <div className="text">
            <div className="line"></div> Introduction
          </div>
          <div className="text">
            Diplomatic service of the republic of lithuania
            <div className="line"></div>
          </div>
        </div>
        <div className="info-wrapper">
          <div className="info-container">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel dolorum, alias libero beatae molestias ipsam earum, modi culpa
            exercitationem necessitatibus rerum, harum qui quod nihil vero. Consequuntur doloribus eos perspiciatis id et enim accusantium
            numquam beatae officia quaerat. Doloribus adipisci nisi voluptates, at dolorum ducimus ab ipsam pariatur unde facilis dolores
            dicta in neque vero, laudantium soluta. Nulla eaque nostrum assumenda quibusdam, incidunt aperiam inventore facilis modi error
            velit exercitationem nobis totam qui fuga quos dolorem omnis itaque fugit veniam eligendi? Maiores cumque et quod itaque
            distinctio excepturi sapiente nostrum accusamus exercitationem modi error ad repellat commodi quaerat voluptates aperiam,
            inventore numquam tempore provident perferendis. In, inventore temporibus. Dolorum eveniet error repellendus quas earum fugiat!
            Ullam aliquam praesentium sapiente vero eos placeat similique officiis, consequuntur ducimus dignissimos nam vitae. Dolor
            necessitatibus placeat vero nihil numquam? Delectus debitis voluptatum velit inventore. Velit libero dolorem assumenda nam
            doloremque debitis explicabo eum aliquam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel dolorum, alias libero
            beatae molestias ipsam earum, modi culpa exercitationem necessitatibus rerum, harum qui quod nihil vero. Consequuntur doloribus
            eos perspiciatis id et enim accusantium numquam beatae officia quaerat. Doloribus adipisci nisi voluptates, at dolorum ducimus
            ab ipsam pariatur unde facilis dolores dicta in neque vero, laudantium soluta. Nulla eaque nostrum assumenda quibusdam, incidunt
            aperiam inventore facilis modi error velit exercitationem nobis totam qui fuga quos dolorem omnis itaque fugit veniam eligendi?
            Maiores cumque et quod itaque distinctio excepturi sapiente nostrum accusamus exercitationem modi error ad repellat commodi
            quaerat voluptates aperiam, inventore numquam tempore provident perferendis. In, inventore temporibus. Dolorum eveniet error
            repellendus quas earum fugiat! Ullam aliquam praesentium sapiente vero eos placeat similique officiis, consequuntur ducimus
            dignissimos nam vitae. Dolor necessitatibus placeat vero nihil numquam? Delectus debitis voluptatum velit inventore. Velit
            libero dolorem assumenda nam doloremque debitis explicabo eum aliquam?
            <div className="stamp-image"></div>
          </div>
        </div>
        <div className="content-bottom">
          <div className="buttons-container">
            <div className="btn btn-left btn-round" onClick={() => infoCarouselClicked(-1)}>
              <div className="icon"></div>
            </div>
            <div className="page-count">{`${infoCarouselPosition}/${pagesCount}`}</div>
            <div className="btn btn-right btn-round" onClick={() => infoCarouselClicked(1)}>
              <div className="icon"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    topicWindowOpen: state.openTopicWindow.topicWindowOpen,
    topicWindowIndex: state.openTopicWindow.topicWindowIndex
  };
};

const mapDispatchToProps = {
  openTopicWindow
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicWindow);
