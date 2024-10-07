import { Link } from 'react-router-dom';
import './styles.css';
import { Profile } from '../../../assets/models/profile.model';

type Props = {
    profile: Profile;
}
export default function CardProfile({ profile }: Props) {

    return (

        <div className="sgh-container">
            <div className="sgh-card-section">

                <div className="sgh-card-profile">
                    <div className="sgh-card-img">
                        <img className='sgh-card-img' src={profile.avatar_url} alt={profile.name} />
                    </div>
                    <div className="sgh-card-info">
                        <div className="sgh-card-details">
                            <div className="sgh-card-details-title">
                                <p>Informations</p>
                            </div>
                            <div className="sgh-card-details-fields">
                                <label className='sgh-lbl'>Profile: </label>
                                <label>
                                    <Link className='sgh-link' to='sss' >
                                        {
                                            profile.url
                                        }
                                    </Link>
                                </label>
                            </div>
                            <div className="sgh-card-details-fields">
                                <label className='sgh-lbl'>Followers:</label>
                                <label>
                                    {
                                        profile.followers
                                    }
                                </label>
                            </div>
                            <div className="sgh-card-details-fields">
                                <label className='sgh-lbl'>Lacalization:</label>
                                <label>
                                    {
                                        profile.location
                                    }
                                </label>
                            </div>
                            <div className="sgh-card-details-fields">
                                <label className='sgh-lbl'>Name:</label>
                                <label>
                                    {
                                        profile.name
                                    }
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}