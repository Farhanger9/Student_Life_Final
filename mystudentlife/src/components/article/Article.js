import { Player, ControlBar } from 'video-react';
import ReactDOM from "react-dom";
import React from "react";
import {Link} from 'react-router-dom'
import { Container, Row, Col } from 'react-grid-system';




function Article(){
  

    return(
        <div>
        <Container>
        <Row style={{ marginTop: `${50}px` }}>
          <Col sm={6}>
          <img 
      src="https://media.nature.com/lw800/magazine-assets/d41586-021-02690-5/d41586-021-02690-5_19735938.jpg"
      alt="new"
      width="550"
      />
          </Col>
          <Col sm={6}>
            <h1><b>Young people’s mental health is finally getting the attention it needs</b></h1>
            <p>
            Worldwide, at least 13% of people between the ages of 10 and 19 live with a diagnosed mental-health disorder, according to the latest State of the World’s Children report, published this week by the United Nations children’s charity UNICEF. It’s the first time in the organization’s history that this flagship report has tackled the challenges in and opportunities for preventing and treating mental-health problems among young people. It reveals that adolescent mental health is highly complex, understudied — and underfunded. 
           </p>
          </Col>
        </Row>
      </Container>
      

      <Container>
      <Row style={{ marginTop: `${50}px` }}>
        <Col sm={6}>
       <p>These findings are echoed in a parallel collection of review articles published this week in a number of Springer Nature journals.
Anxiety and depression constitute more than 40% of mental-health disorders among young people (those aged 10–19). UNICEF also reports that, worldwide, suicide is the fourth most-common cause of death (after road injuries, tuberculosis and interpersonal violence) among adolescents (aged 15–19). In eastern Europe and central Asia, suicide is the leading cause of death for young people in that age group — and it’s the second-highest cause in western Europe and North America.
          <br></br>
          <p>Sadly, psychological distress among young people seems to be rising. One study found that rates of depression among a nationally representative sample of US adolescents (aged 12 to 17) increased from 8.5% of young adults to 13.2% between 2005 and 20171. There’s also initial evidence that the coronavirus pandemic is exacerbating this trend in some countries. For example, in a nationwide study2 from Iceland, adolescents (aged 13–18) reported significantly more symptoms of mental ill health during the pandemic than did their peers before it. And girls were more likely to experience these symptoms than were boys.

Although most mental-health disorders arise during adolescence, UNICEF says that only one-third of investment in mental-health research is targeted towards young people. Moreover, the research itself suffers from fragmentation — scientists involved tend to work inside some key disciplines, such as psychiatry, paediatrics, psychology and epidemiology, and the links between research and health-care services are often poor. This means that effective forms of prevention and treatment are limited, and lack a solid understanding of what works, in which context and why.

This week’s collection of review articles dives deep into the state of knowledge of interventions — those that work and those that don’t — for preventing and treating anxiety and depression in young people aged 14–24. In some of the projects, young people with lived experience of anxiety and depression were co-investigators, involved in both the design and implementation of the reviews, as well as in interpretation of the findings.
<br></br>
<h3><b>Quest for new therapies</b></h3>

Worldwide, the most common treatment for anxiety and depression is a class of drug called selective serotonin reuptake inhibitors, which increase serotonin levels in the brain and are intended to enhance emotion and mood. But their modest efficacy and substantial side effects3 have spurred the study of alternative physiological mechanisms that could be involved in youth depression and anxiety, so that new therapeutics can be developed.</p>
           </p> 
        </Col>
        <Col sm={6}>
          <p>
          For example, researchers have been investigating potential links between depression and inflammatory disorders — such as asthma, cardiovascular disease and inflammatory bowel disease. This is because, in many cases, adults with depression also experience such disorders. Moreover, there’s evidence that, in mice, changes to the gut microbiota during development reduce behaviours similar to those linked to anxiety and depression in people4. That suggests that targeting the gut microbiome during adolescence could be a promising avenue for reducing anxiety in young people. Kathrin Cohen Kadosh at the University of Surrey in Guildford, UK, and colleagues reviewed existing reports of interventions in which diets were changed to target the gut microbiome. These were found to have had minimal effect on youth anxiety5. However, the authors urge caution before such a conclusion can be confirmed, citing methodological limitations (including small sample sizes) among the studies they reviewed. They say the next crop of studies will need to involve larger-scale clinical trials.

By contrast, researchers have found that improving young people’s cognitive and interpersonal skills can be more effective in preventing and treating anxiety and depression under certain circumstances — although the reason for this is not known. For instance, a concept known as ‘decentring’ or ‘psychological distancing’ (that is, encouraging a person to adopt an objective perspective on negative thoughts and feelings) can help both to prevent and to alleviate depression and anxiety, report Marc Bennett at the University of Cambridge, UK, and colleagues6, although the underlying neurobiological mechanisms are unclear.

In addition, Alexander Daros at the Campbell Family Mental Health Institute in Toronto, Canada, and colleagues report a meta-analysis of 90 randomized controlled trials. They found that helping young people to improve their emotion-regulation skills, which are needed to control emotional responses to difficult situations, enables them to cope better with anxiety and depression7. However, it is still unclear whether better regulation of emotions is the cause or the effect of these improvements.
<h3><b>Co-production is essential</b></h3>

It’s uncommon — but increasingly seen as essential — that researchers working on treatments and interventions are directly involving young people who’ve experienced mental ill health. These young people need to be involved in all aspects of the research process, from conceptualizing to and designing a study, to conducting it and interpreting the results. Such an approach will lead to more-useful science, and will lessen the risk of developing irrelevant or inappropriate interventions.
         </p>
        </Col>
      </Row>
    </Container>
       </div>

    );

    
}

export default Article;