import data from './data'
import './style.css';
import Banner from './components/Banner'
import Card from './components/Card'

export default function App() {
    const cards = data.map((item) => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <div>
            <Banner />
            <div>
                {cards}
            </div>
        </div>
    );
}
