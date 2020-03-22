import React from 'react';
import useApi from '../hooks/useApi';
import styled from 'styled-components';
import { StyledH3 } from '../styles/typography';

const AboutWrapper = styled.div`
    ${({ theme }) => theme.sm`
        margin-left: 250px;
    `};
`;

function About() {
    const { data } = useApi();
    if (data) {
        // console.log(data);
    }
    return (
        <AboutWrapper>
            <StyledH3>I'm Om oss</StyledH3>
            <p>
                Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända
                sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett
                provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till
                elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med
                lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.
                Varför använder vi det? Det är ett välkänt faktum att läsare distraheras av läsbar text på en sida när
                man skall studera layouten. Poängen med Lorem Ipsum är att det ger ett normalt ordflöde, till skillnad
                från "Text här, Text här", och ger intryck av att vara läsbar text. Många publiseringprogram och
                webbutvecklare använder Lorem Ipsum som test-text, och en sökning efter "Lorem Ipsum" avslöjar många
                webbsidor under uteckling. Olika versioner har dykt upp under åren, ibland av olyckshändelse, ibland med
                flit (mer eller mindre humoristiska). Var kommer det ifrån? I motsättning till vad många tror, är inte
                Lorem Ipsum slumpvisa ord. Det har sina rötter i ett stycke klassiskt litteratur på latin från 45 år
                före år 0, och är alltså över 2000 år gammalt. Richard McClintock, en professor i latin på
                Hampden-Sydney College i Virginia, översatte ett av de mer ovanliga orden, consectetur, från ett stycke
                Lorem Ipsum och fann dess ursprung genom att studera användningen av dessa ord i klassisk litteratur.
                Lorem Ipsum kommer från styckena 1.10.32 och 1.10.33 av "de Finibus Bonorum et Malorum" (Ytterligheterna
                av ont och gott) av Cicero, skriven 45 före år 0. Boken är en avhandling i teorier om etik, och var
                väldigt populär under renäsanssen. Den inledande meningen i Lorem Ipsum, "Lorem Ipsum dolor sit
                amet...", kommer från stycke 1.10.32. Den ursprungliga Lorem Ipsum-texten från 1500-talet är återgiven
                nedan för de intresserade. Styckena 1.10.32 och 1.10.33 från "de Finibus Bonorum et Malorum" av Cicero
                hittar du också i deras originala form, åtföljda av de engelska översättningarna av H. Rackham från
                1914. Var får jag tag i det? Det finns många olika varianter av Lorem Ipsum, men majoriteten av dessa
                har ändrats på någotvis. Antingen med inslag av humor, eller med inlägg av ord som knappast ser
                trovärdiga ut. Skall man använda långa stycken av Lorem Ipsum bör man försäkra sig om att det inte
                gömmer sig något pinsamt mitt i texten. Lorem Ipsum-generatorer på internet tenderar att repetera Lorem
                Ipsum-texten styckvis efter behov, något som gör denna sidan till den första riktiga Lorem
                Ipsum-generatorn på internet. Den använder ett ordförråd på över 200 ord, kombinerat med ett antal
                meningsbyggnadsstrukturer som tillsamman genererar Lorem Ipsum som ser ut som en normal mening. Lorem
                Ipsum genererad på denna sidan är därför alltid fri från repetitioner, humorinslag, märkliga
                ordformationer osv.
            </p>
            <p>
                Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända
                sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett
                provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till
                elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med
                lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.
                Varför använder vi det? Det är ett välkänt faktum att läsare distraheras av läsbar text på en sida när
                man skall studera layouten. Poängen med Lorem Ipsum är att det ger ett normalt ordflöde, till skillnad
                från "Text här, Text här", och ger intryck av att vara läsbar text. Många publiseringprogram och
                webbutvecklare använder Lorem Ipsum som test-text, och en sökning efter "Lorem Ipsum" avslöjar många
                webbsidor under uteckling. Olika versioner har dykt upp under åren, ibland av olyckshändelse, ibland med
                flit (mer eller mindre humoristiska). Var kommer det ifrån? I motsättning till vad många tror, är inte
                Lorem Ipsum slumpvisa ord. Det har sina rötter i ett stycke klassiskt litteratur på latin från 45 år
                före år 0, och är alltså över 2000 år gammalt. Richard McClintock, en professor i latin på
                Hampden-Sydney College i Virginia, översatte ett av de mer ovanliga orden, consectetur, från ett stycke
                Lorem Ipsum och fann dess ursprung genom att studera användningen av dessa ord i klassisk litteratur.
                Lorem Ipsum kommer från styckena 1.10.32 och 1.10.33 av "de Finibus Bonorum et Malorum" (Ytterligheterna
                av ont och gott) av Cicero, skriven 45 före år 0. Boken är en avhandling i teorier om etik, och var
                väldigt populär under renäsanssen. Den inledande meningen i Lorem Ipsum, "Lorem Ipsum dolor sit
                amet...", kommer från stycke 1.10.32. Den ursprungliga Lorem Ipsum-texten från 1500-talet är återgiven
                nedan för de intresserade. Styckena 1.10.32 och 1.10.33 från "de Finibus Bonorum et Malorum" av Cicero
                hittar du också i deras originala form, åtföljda av de engelska översättningarna av H. Rackham från
                1914. Var får jag tag i det? Det finns många olika varianter av Lorem Ipsum, men majoriteten av dessa
                har ändrats på någotvis. Antingen med inslag av humor, eller med inlägg av ord som knappast ser
                trovärdiga ut. Skall man använda långa stycken av Lorem Ipsum bör man försäkra sig om att det inte
                gömmer sig något pinsamt mitt i texten. Lorem Ipsum-generatorer på internet tenderar att repetera Lorem
                Ipsum-texten styckvis efter behov, något som gör denna sidan till den första riktiga Lorem
                Ipsum-generatorn på internet. Den använder ett ordförråd på över 200 ord, kombinerat med ett antal
                meningsbyggnadsstrukturer som tillsamman genererar Lorem Ipsum som ser ut som en normal mening. Lorem
                Ipsum genererad på denna sidan är därför alltid fri från repetitioner, humorinslag, märkliga
                ordformationer osv.
            </p>
            <p>
                Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända
                sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett
                provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till
                elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med
                lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.
                Varför använder vi det? Det är ett välkänt faktum att läsare distraheras av läsbar text på en sida när
                man skall studera layouten. Poängen med Lorem Ipsum är att det ger ett normalt ordflöde, till skillnad
                från "Text här, Text här", och ger intryck av att vara läsbar text. Många publiseringprogram och
                webbutvecklare använder Lorem Ipsum som test-text, och en sökning efter "Lorem Ipsum" avslöjar många
                webbsidor under uteckling. Olika versioner har dykt upp under åren, ibland av olyckshändelse, ibland med
                flit (mer eller mindre humoristiska). Var kommer det ifrån? I motsättning till vad många tror, är inte
                Lorem Ipsum slumpvisa ord. Det har sina rötter i ett stycke klassiskt litteratur på latin från 45 år
                före år 0, och är alltså över 2000 år gammalt. Richard McClintock, en professor i latin på
                Hampden-Sydney College i Virginia, översatte ett av de mer ovanliga orden, consectetur, från ett stycke
                Lorem Ipsum och fann dess ursprung genom att studera användningen av dessa ord i klassisk litteratur.
                Lorem Ipsum kommer från styckena 1.10.32 och 1.10.33 av "de Finibus Bonorum et Malorum" (Ytterligheterna
                av ont och gott) av Cicero, skriven 45 före år 0. Boken är en avhandling i teorier om etik, och var
                väldigt populär under renäsanssen. Den inledande meningen i Lorem Ipsum, "Lorem Ipsum dolor sit
                amet...", kommer från stycke 1.10.32. Den ursprungliga Lorem Ipsum-texten från 1500-talet är återgiven
                nedan för de intresserade. Styckena 1.10.32 och 1.10.33 från "de Finibus Bonorum et Malorum" av Cicero
                hittar du också i deras originala form, åtföljda av de engelska översättningarna av H. Rackham från
                1914. Var får jag tag i det? Det finns många olika varianter av Lorem Ipsum, men majoriteten av dessa
                har ändrats på någotvis. Antingen med inslag av humor, eller med inlägg av ord som knappast ser
                trovärdiga ut. Skall man använda långa stycken av Lorem Ipsum bör man försäkra sig om att det inte
                gömmer sig något pinsamt mitt i texten. Lorem Ipsum-generatorer på internet tenderar att repetera Lorem
                Ipsum-texten styckvis efter behov, något som gör denna sidan till den första riktiga Lorem
                Ipsum-generatorn på internet. Den använder ett ordförråd på över 200 ord, kombinerat med ett antal
                meningsbyggnadsstrukturer som tillsamman genererar Lorem Ipsum som ser ut som en normal mening. Lorem
                Ipsum genererad på denna sidan är därför alltid fri från repetitioner, humorinslag, märkliga
                ordformationer osv.
            </p>
        </AboutWrapper>
    );
}

export default About;
