let root_dir = 'audio'
let descriptions = ['a', 'b']

for( var i=0;i < descriptions.length;i++) {
    $('body').append(`
        <p>${descriptions[i]}</p>
        <audio controls>
            <source src="./${root_dir}/${i+1}.wav" type="audio/wav">
            Your browser does not support the audio tag.
        </audio>
    `)
}