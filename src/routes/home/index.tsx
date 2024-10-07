import './styles.css';
import gitIcon from '../../assets/images/github-icon.svg';
import Header from '../../components/header';
import Button from '../../components/button';
import { Link } from 'react-router-dom';
export default function Home() {

    return (
        <>
            <Header />

            <div className="sgh-container">
                <div className="sgh-home-section">
                    <div className="sgh-home-title">
                        <img src={gitIcon} alt="Icon Git" />
                        <h1>Search Github API</h1>
                    </div>
                    <div className="sgh-home-body">
                        <p>Start searching Profile...</p>
                    </div>
                    <div className="sgh-home-btn">
                        <Link to="search" >
                            <Button text="Start" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}