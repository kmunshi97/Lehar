$('#yes-modal')
    .modal('attach events', '#yes-button', 'show')
    .modal({ centered: false })
    .modal('setting', 'closable', false)
    ;

$('#no-modal')
    .modal('attach events', '#no-button', 'show')
    .modal({ centered: false })
    .modal('setting', 'closable', false)
    ;

$('.click-here')
    .transition('shake')
    ;