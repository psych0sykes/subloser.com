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
        <ListenButton color="#57DA10" link="https://open.spotify.com/artist/2eGR1MENSdFUpHZ4x5wIri?autoplay=true&v=A">
          spotify
        </ListenButton>
        <ListenButton color="fuchsia" link="https://itunes.apple.com/us/artist/subloser/1352524116?ign-gact=3&ls=1">
          apple music
        </ListenButton>
        <ListenButton>
          youtube
        </ListenButton>
      </Section>
    </div>
  )
}