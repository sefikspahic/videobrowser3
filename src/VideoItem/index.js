import VideoDetails from "../VideoDetails";
import { Grid, Segment } from "semantic-ui-react";
const Videoitem = ({ url, img, tit, des, counter, onClick }) => {
  const clickHandler = (e) => {
    onClick(tit);
  };

  return (
    <div>
      <Segment
        placeholder
        style={{ marginLeft: "1rem", padding: "3rem", marginRight: "1rem" }}
      >
        {" "}
        <Grid columns={2} relaxed="very" stackable >
          <Grid.Row verticalAlign="middle">
            {counter === 0 ? (
              <div style={{ marginLeft: "19rem", padding: "3rem", marginRight: "19rem" }}>
                <iframe
                  width="1060"
                  height="515"
                  src={url}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <Grid.Column marginLeft="25rem">
                 
                  <div class="ui segment">
                  <Segment>

                  <p>{tit}</p>
                  <VideoDetails des={des} />
                  </Segment>
                  </div>
                </Grid.Column>
              </div>
            ) : 
            
            (
              <Grid.Column>
                <div>
                  <img src={img} alt="image" onClick={clickHandler} />
                  <p>{tit}</p>
                </div>
              </Grid.Column>
            )}
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};
export default Videoitem;
