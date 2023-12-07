import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { headerMatch } from '../Redux/headerSlice/headerSlice';
import BannerMatch from '../components/BannerMatch/BannerMatch';
import { useParams } from 'react-router-dom';
import data from "../assets/data/data.json";
import GameContainer from '../components/GameContainer/GameContainer';
import { getdataGame } from '../Redux/GameSlice/GameSlice';
import Footer from "../components/Footer/Footer";
import ModalContainer from '../components/Modal/ModalContainer';

export default function Match() {
    const { selectedMatch } = useParams();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const matchData = data.matchs.find((match) => match.matchName === selectedMatch);

    useEffect(() => {
        dispatch(headerMatch());
    }, [dispatch]);

    useEffect(() => {
        const fetchData = async () => {
            if (matchData) {
                await dispatch(getdataGame(matchData));
                setIsLoading(false);
            }
        };

        fetchData();
    }, [dispatch, matchData, selectedMatch]);

    const gameData = useSelector(state => state.gameSlice.dataGame);

    const stateOfModalType = useSelector(state => state.modalSlice?.modalContainerIsVisible)

    return (
        <div className='app'>
            <Header />
            <main>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <BannerMatch 
                            title={selectedMatch}
                            category={matchData.category}
                            score={matchData.score}
                        />
                        <GameContainer data={gameData} />
                    </>
                )}
            </main>
            <Footer/>
            {stateOfModalType && (
                <ModalContainer/>
            )}
        </div>
    );
}


