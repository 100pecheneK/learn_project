import { NextPageContext } from 'next'
import getPrivateDataFromApi from '@utils/getPrivateDataFromApi'
import { PersonModel } from '@models'
import withDb from '../utils/dbConnect'

export default function People(props: any) {
  return (
    <>
      <pre>{props.people}</pre>
    </>
  )
}

export async function getServerSideProps(ctx: NextPageContext) {
  const json = await getPrivateDataFromApi('people', ctx)
  return { props: { people: JSON.stringify(json) } }
}
