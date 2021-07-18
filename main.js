$(function(){

    $( "#github_content" ).hide();
    $( "#bootstrap_content" ).hide();
    $( "#node_content" ).hide();

  function home_button(){
    let home = $(".home_button");
    home.on({
      click: function(){
        $( "#bootstrap_content" ).hide( "slow");
        $( "#github_content" ).hide( "slow");
        $( "#node_content" ).hide( "slow");
        $( "#home_content" ).show( "slow");
      },

      mouseenter: function(){
        $(this).animate({width: "100%"}, 500);
      },

      mouseleave: function(){
        $(this).animate({width: "50%"}, 500);
      }
      
    }); 
  }

  


    $("#github_enter").on({
      click: function(){
        $( "#home_content" ).hide( "slow");
        $( "#bootstrap_content" ).hide( "slow");
        $( "#node_content" ).hide( "slow");
        $( "#github_content" ).show( "slow");
        home_button();
        $("#github1_content").show("slow");
        $("#github2_content").hide();
        $("#github3_content").hide();
        $("#github4_content").hide();
      }
    });

    $("#bootstrap_enter").on({
      click: function(){
        $( "#home_content" ).hide( "slow");
        $( "#github_content" ).hide( "slow");
        $( "#node_content" ).hide( "slow");
        $( "#bootstrap_content" ).show( "slow");
        home_button();
      }
    });

    $("#node_enter").on({
      click: function(){
        $( "#github_content" ).hide( "slow");
        $( "#home_content" ).hide( "slow");
        $( "#bootstrap_content" ).hide( "slow");
        $( "#node_content" ).show( "slow");
        home_button();
 
      }
    });

    $("#github_1").on({
      click: function(){
        $("#github1_content").show("slow");
        $("#github2_content").hide("slow");
        $("#github3_content").hide("slow");
        $("#github4_content").hide("slow");
      }
    });

    $("#github_2").on({
      click: function(){
        $("#github1_content").hide("slow");
        $("#github2_content").show("slow");
        $("#github3_content").hide("slow");
        $("#github4_content").hide("slow");
      }
    });

    $("#github_3").on({
      click: function(){
        $("#github1_content").hide("slow");
        $("#github2_content").hide("slow");
        $("#github3_content").show("slow");
        $("#github4_content").hide("slow");
      }
    });

    $("#github_4").on({
      click: function(){
        $("#github1_content").hide("slow");
        $("#github2_content").hide("slow");
        $("#github3_content").hide("slow");
        $("#github4_content").show("slow");
      }
    });

      // $('.lesson_choice').on({
      //   click: function(){
      //     // $(this).addClass('active');
      //   }
      // });

      // $('.tablinks').click({

      // });



    // $("#github_enter").on({
    //   click: function(){
    //     $("#home_content").hide();
    //     $("github_content").show();
    //   }
    // });

    // $("#node_enter").on({
    //   click: function(){
    //     $(this).animate({
    //       left: '20%',
    //       height: '70px',
    //       width: '150px',
    //       fontSize: '1.2em',
    //       paddingTop: '7%'
    //     });
    //   },
    //     mouseenter: function () {
    //       $(this).css("background-color", "rgb(255, 0, 0)");
    //   },
    //     mouseleave: function () {
    //       $(this).css("background-color", "rgb(128, 0, 79)");
    // }
    // });

    // $("p").on({
    //   mouseenter: function(){
    //     $(this).css("background-color", "rgb(218, 0, 0)");
    //   },
    //   mouseleave: function(){
    //     $(this).css("background-color", "rgb(128, 0, 0)");
    //   }
    // }); 
    // $("#github_class").on({
    //   hover: function(){
    //     $(this).innerHTML("background-color", "rgb(218, 0, 0)");
    //   },
    //   mouseleave: function(){
    //     $(this).css("background-color", "rgb(128, 0, 0)");
    //   }
    // }); 

  }); 

   
  $( window ).on( "load", function() {
    console.log( "window loaded" );
});