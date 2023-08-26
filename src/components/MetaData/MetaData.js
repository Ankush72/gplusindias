import React, { Fragment } from 'react'
import {Helmet} from "react-helmet"

const MetaData = ({title}) => {
  return (
    <Fragment>
    <div>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content="Gplus is a home appliances manufactures in India and also best washing machine in India. Gplus products made Best washing machine with Innovative Technology gives powerful Performance." />
            <meta name="keyword" content="Best washing Machine, Best Washing Machine in India" />
        </Helmet>
    </div>
    </Fragment>
  )
}

export default MetaData