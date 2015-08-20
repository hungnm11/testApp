$(document).ready(function() {
    
    var now = new Date();
    var hour = now.getHours();
    
    var skyWidth = $('#sky').width();
    var skyHeight = $('#sky').height();
    
    $('.morning').click(function() {
		$('.timesheet a').removeClass('active');
		$(this).addClass('active');
        $('.random').remove('.random');
        $('.sky').css({
            backgroundColor: '#ffcc33'
        });
        
        $('.sun').css({
            backgroundColor: '#f15a24',
            top: '220px',
            left: '70px',
            boxShadow: '0 0 0 10px rgba(241,90,36,0.7), 0 0 0 20px rgba(241,90,36,0.5), 0 0 0 30px rgba(241,90,36,0.3)'
        });
    });
    
    $('.afternoon').click(function() {
		$('.timesheet a').removeClass('active');
		$(this).addClass('active');
        $('.random').remove('.random');
        $('.sky').css({
            backgroundColor: '#33cccc'
        });
        
        $('.sun').css({
            backgroundColor: '#fff',
            top: '60px',
            left: '250px',
            boxShadow: '0 0 0 10px rgba(255,255,255,0.7), 0 0 0 20px rgba(255,255,255,0.5), 0 0 0 30px rgba(255,255,255,0.3)'
        });
    });
    
    $('.evening').click(function(e) {
        e.preventDefault();
		
        newX = randomFromTo(1,skyWidth);
        newY = randomFromTo(1,skyHeight);
		
       $('.timesheet a').removeClass('active');
		$(this).addClass('active');
        $('.random').remove('.random');
        
        for (var i=0;i<30;i++) {
            var star = $('.sky').append('<span class="random">.</span>');
            $('.random').each(function() {
                $(this).css({
                    color: '#fff',
                    top: randomFromTo(1,skyHeight),
                    left: randomFromTo(1,skyWidth)
                });
            });
        }
        
        $('.sky').css({
            backgroundColor: '#ff9999'
        });
        
        $('.sun').css({
            backgroundColor: '#cc0000',
            top: '220px',
            left: '450px',
            boxShadow: '0 0 0 10px rgba(204,0,0,0.7), 0 0 0 20px rgba(204,0,0,0.5), 0 0 0 30px rgba(204,0,0,0.3)'
        });
        
    });
    
    function randomFromTo(from,to) {
        return Math.floor(from + (1+to-from)*Math.random());
    }
    
    
});