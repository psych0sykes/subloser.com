import ListenButton from "./../components/ListenButton";
import Section from "./../components/Section";

export default function Home() {
  return(
    <div>
      <Section direction="column">
        <h1>subloser</h1>
        <h2>subloser_ii</h2>
        <div>05/23/2020</div>
        <img style={{width: "70vw"}} src="/subloser_ii.jpg"/>
      </Section>
      <Section direction="column">
        <ListenButton link="https://open.spotify.com/artist/2eGR1MENSdFUpHZ4x5wIri?autoplay=true&v=A">
          spotify
        </ListenButton>
        <ListenButton link="https://itunes.apple.com/us/artist/subloser/1352524116?ign-gact=3&ls=1">
          apple music
        </ListenButton>
        <ListenButton link="https://www.youtube.com/playlist?playnext=1&list=PLAtFjrN5j3tYa6NP-amOGwKBV1-RplSrt&feature=gws_kp_artist">
          youtube
        </ListenButton>
      </Section>
    </div>
  )
}