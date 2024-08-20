import { Categories } from "../assets/MorkData"


const Home = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <div>SHOP BY CATEGORIES</div>
          </div>
          <ul>
            {Categories?.map((item: any, index: any) =>(
              <li key={index}>{item}</li>
            ) )}
          </ul>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home