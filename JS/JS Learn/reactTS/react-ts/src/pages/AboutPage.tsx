import React from 'react'
import {useHistory} from "react-router"


const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <section className="container container--shadow">
      <h1>О нас</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab facere, quasi. Culpa dolore
        dolorem ducimus ipsum iste, iure magnam numquam, officiis recusandae reiciendis rem
        repellendus sed sunt tenetur ut? Ab beatae blanditiis commodi cum dignissimos ducimus ex,
        fuga libero, necessitatibus odit perspiciatis ratione saepe totam vitae voluptate! Amet
        commodi corporis, cum deleniti dolor exercitationem illum inventore, laborum magnam nihil
        odio porro repudiandae suscipit voluptas voluptatum. A adipisci consectetur, dicta eum
        exercitationem fuga id laudantium quis sed voluptatum. Adipisci architecto asperiores
        consequuntur earum, illo illum libero modi non officiis quae quisquam, recusandae, tempore
        ullam. Ab alias architecto eius ex id voluptatibus.</p>
      <button onClick={() => history.push('/')}>Домой</button>
    </section>
  )
}

export default AboutPage
