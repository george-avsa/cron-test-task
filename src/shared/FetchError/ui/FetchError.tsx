import errorImage from './../assets/meme404.png';

function FetchError() {
    return (
        <div className="fetch-error">
            <img src={errorImage} alt="" />
            <p>
                пшшшш, пшшшш
                * звуки рации *    
            </p>
            <p>
                - Прием, мы не можем получить данные с сервера...
            </p>
            <p>
                - Понял, показываем пользователю ошибку!
            </p>

            <p>Ошибка в запросе данных на сервер :(</p>

        </div>
    );
}

export default FetchError;