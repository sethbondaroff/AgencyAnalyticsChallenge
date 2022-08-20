import React from 'react'
import '../App.css'

type Props = {
    cities: Array<string>,
    selectedCity: string,
    setSelectedCity: (city: string) => void
}
type State = {
    display: Array<React.ReactElement>
}

class CityLinks extends React.Component<Props, State>{
    state: Readonly<State> = {
        display: []
    }

    generateLinkList = () => {
        const cityList: Array<React.ReactElement> = []
        for(const city of this.props.cities){
            cityList.push(
                <div
                    key={city}
                    className={`link${this.props.selectedCity === city ? ' selected' : ''}`}
                    onClick={() => this.props.setSelectedCity(city)}
                >
                    {city.toUpperCase()}
                </div>
            )
        }
        this.setState(() => ({
            display: cityList
        }))
    }

    componentDidMount(){
        this.generateLinkList()
    }

    componentDidUpdate(prevProps: Props){
        if(this.props.selectedCity !== prevProps.selectedCity){
            this.generateLinkList()
        }
    }

    render(){
        return(
            <div className='linkContainer'>
                {this.state.display}
            </div>
        )
    }
}

export default CityLinks