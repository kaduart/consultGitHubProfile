import './styles.css';
import Header from "../../components/header";
import Button from '../../components/button';
import CardProfile from '../../components/cards/card-profile/indes';
import { useEffect, useState } from 'react';
import { Profile } from '../../assets/models/profile.model';
import * as gitService from '../../services/git-service';
import { AxiosResponse } from 'axios';

type FormData = {
    nickName: string;
}
export default function Search() {

    const [erro, setErro] = useState<string>();
    const [name, setNickName] = useState<string>();
    const [profile, setProfile] = useState<Profile>();
    const [formData, setFormData] = useState<FormData>({
        nickName: ''
    });

    useEffect(() => {
        if (name) {

            gitService.search(formData.nickName).then((response: AxiosResponse<Profile>) => {
                setProfile(response.data);
            }).catch((err) => {
                setErro(err.response.data.message);
                setProfile(undefined)
            });
        }
    }, [name]);

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        const name = event.target.name;
        event.preventDefault();

        setFormData({ ...formData, [name]: value });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleFormSubmit(event: any) {
        event.preventDefault();

        setNickName(formData.nickName);
    }

    return (
        <>
            <Header />
            <div className="sgh-container">
                <form className="sgh-search-section" onSubmit={handleFormSubmit}>
                    <h1>Search GitHub Users</h1>
                    <div className="sgh-search-field">
                        <p>Find users by their username</p>
                        <input className='sgh-search-ipt'
                            name='nickName'
                            value={formData.nickName}
                            type="text" placeholder="Search GitHub users"
                            onChange={handleSearch} />
                    </div>
                    <div className="sgh-search-btn">
                        <Button text='Search' />
                    </div>
                </form>
            </div>

            {
                profile
                    ? <CardProfile profile={profile} />
                    : <div className="sgh-container">
                        <p className='sgh-error'>
                            {erro}
                        </p>
                    </div>
            }

        </>
    )
}