import React from 'react'
import PropTypes from 'prop-types'

import './styles.sass'

const Card = ({ title, avatar, children }) => (
  <div className="jampp__Card">
    <div className="jampp__Card__Title">
      {avatar && <img className="jampp__Card__Img" src={avatar} alt=""/>}
      {!avatar && <span className="jampp__Card__Avatar"/>}
      {title}
    </div>

    {children}
  </div>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default Card
