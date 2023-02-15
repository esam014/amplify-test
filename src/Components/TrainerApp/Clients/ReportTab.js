import { Component } from "react";
import { Carousel } from "react-bootstrap";

class ReportTab extends Component {

    render() {
        const Photos = ["../../../../public/Images/LargeCircle.png", "../../../../public/Images/MediumCircle.png", "../../../../public/Images/SmallCircle.png"]
        return (
            <div>

                <Carousel fade variant="dark">
                    {Photos.map((Photo) => {
                        return <Carousel.Item>
                            <img src={Photo} alt={Photo} className="d-block w-100" />
                        </Carousel.Item>
                    })}
                </Carousel>
            </div>
        )
    }
}

export default ReportTab