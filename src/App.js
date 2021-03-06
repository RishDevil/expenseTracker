import InfoCard from "./component/detail/InfoCard";
import Body from "./component/Holder/Body";
import { Grid } from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";
import { SpeechState, useSpeechContext } from "@speechly/react-client";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  const main = useRef(null);

  const { speechState } = useSpeechContext();

  const executeScroll = () => main.current.scrollIntoView();

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <InfoCard title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Body />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <InfoCard title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <InfoCard title="Expense" />
        </Grid>
        <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer>
      </Grid>
    </div>
  );
}

export default App;
