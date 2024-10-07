import { Link } from 'react-router-dom';
import './styles.css';
export default function Header() {

    return (
        <header>
            <div className="sgh-container">
                <div className="sgh-header-title">
                    <Link to="/">
                        GitHub API
                    </Link>
                </div>
            </div>
        </header>
    )
}