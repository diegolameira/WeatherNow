import { PureComponent } from "react";

export const fetchWeather = async q => {
  const API_OPENWEATHERMAP = "api.openweathermap.org/data";
  const API_KEY = "3d5af9eeb0794cd6e5a85f58b1506e58";
  let url = `//${API_OPENWEATHERMAP}/2.5/weather?q=${q}&units=metric&APPID=${API_KEY}`;
  const res = await fetch(url);
  const response = await res.json();
  return {
    ...response,
    lastUpdate: Date.now()
  };
};

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lastUpdate: "none",
      main: {}
    };
  }

  componentDidMount() {
    this.load(this.props.city);
  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      const { city } = this.props;
      this.load(city);
    }
  }

  load = (city = this.props.city) => {
    const updateState = city => this.setState(city);
    fetchWeather(city).then(updateState);
  };

  render = () => {
    return this.props.children(this.state);
  };
}
