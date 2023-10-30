import React from "react"
import { BlitzPage } from "@blitzjs/next"
import { useStringParam } from "src/utils/utils"

const TeamPage: BlitzPage = () => {
  const id = useStringParam("id")
  return <div>{id} is the best team member</div>
}

export default TeamPage
