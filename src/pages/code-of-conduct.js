import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Panel from '../components/Panel'

const CodeOfConduct = ({ location }) => {
  const organizer = (location.state || {}).organizer || {
    name: 'Sara Vieira',
    phoneNumber: '+351 91 7296 830',
    email: 'hey@iamsaravieira.com',
    twitterHandle: '@NikkitaFTW'
  }
  return (
    <Layout>
      <SEO
        title="QueerJS - Code Of Conduct"
        description="A meetup for everyone where Queer Speakers take the stage"
      />
      <main>
        <h1 hidden>Welcome to QueerJS</h1>
        <Panel heading="Code of Conduct">
          <section
            css={`
              line-height: 1.5;
            `}
          >
            <p>
              All attendees, speakers, sponsors and volunteers at QueerJS meetup are required to
              agree with the following code of conduct.
            </p>
            <p>
              Organizers will enforce this code throughout the event. We are expecting cooperation
              from all participants to help ensuring a safe environment for everybody.
            </p>
            <p>
              Need Help? Contact {organizer.name} {organizer.phoneNumber}
            </p>

            <h2>The Quick Version</h2>
            <p>
              Here at QueerJS meetup, we are dedicated to providing a harassment-free meetup
              experience for everyone, regardless of gender, sexual orientation, disability,
              physical appearance, body size, race, or religion (or lack thereof).
            </p>
            <br />
            <p>
              We do not tolerate harassment of meetup participants in any form. We ask that all
              attendees are mindful of their surroundings and of their fellow participants.
            </p>
            <br />
            <p>Meetup attendees violating these rules will be expelled from the meetup.</p>
            <h2>The Less Quick Version</h2>
            <p>
              Harassment includes, but is not limited to, offensive verbal comments related to
              gender, age, sexual orientation, disability, physical appearance, body size, race,
              religion, sexual images in public spaces, deliberate intimidation, stalking,
              following, harassing photography or recording, sustained disruption of talks or other
              events, inappropriate physical contact, and unwelcome sexual attention.
            </p>
            <p>
              Participants asked to stop any harassing behaviour are expected to comply immediately.
            </p>
            <p>
              Sponsors are also subject to the anti-harassment policy. In particular, sponsors
              should not use sexualised images, activities, or other material.
            </p>
            <p>
              If a participant engages in harassing behaviour, the meetup organizers may take any
              action they deem appropriate, including warning the offender or expulsion from the
              meetup with no refund.
            </p>
            <p>
              If you are subject to or witness unacceptable behavior, or have any other concerns,
              please notify a QueerJS organizer as soon as possible.
            </p>
            <p>
              If you can’t find the organizer, reach out to {organizer.name} at {organizer.email} /{' '}
              {organizer.phoneNumber} / {organizer.twitterHandle}
            </p>
            <p>
              Conference staff will be happy to help participants and assist those experiencing
              harassment by providing safe environment, arranging needed transport, accommodation or
              otherwise assist in the situation.
            </p>
            <p>
              We expect all community participants (contributors, paid or otherwise; sponsors; and
              other guests) to abide by this Code of Conduct in all community venues—online and
              in-person—as well as in all one-on-one communications pertaining to community
              business.
            </p>
          </section>
        </Panel>
      </main>
    </Layout>
  )
}

export default CodeOfConduct
