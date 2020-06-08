let root_dir = 'audio'
let song_titles = ['I am a good boy', 'I am handsome']

for( var i=0;i < song_titles.length;i++) {
    $('body').append(`

        <p>${song_titles[i]}</p>
        <ul>
            <li>
                <p>Mixture</p>
                <audio controls>
                    <source src="./${root_dir}/${i+1}.wav" type="audio/wav">
                </audio>
            </li>
            <li>
                <p>Random N2000 Estimates</p>
                violin
                <br>
                <audio controls>
                    <source src="./${root_dir}/${i+1}.wav" type="audio/wav">
                </audio>
                <br>
                piano
                <br>
                <audio controls>
                    <source src="./${root_dir}/${i+1}.wav" type="audio/wav">
                </audio>
            </li>
            <li>
                <p>Wet N2000 Estimates</p>
                violin
                <br>
                <audio controls>
                    <source src="./${root_dir}/${i+1}.wav" type="audio/wav">
                </audio>
                <br>
                piano
                <br>
                <audio controls>
                    <source src="./${root_dir}/${i+1}.wav" type="audio/wav">
                </audio>
            </li>
        </ul>
    `)
}