let root_dir = 'audio'

for( var i=0;i < 2;i++) {
    $('body').append(`
        <p>${i}</p>
        <audio controls>
            <source src="./${root_dir}/${i+1}.wav" type="audio/wav">
            Your browser does not support the audio tag.
        </audio>
    `)
}