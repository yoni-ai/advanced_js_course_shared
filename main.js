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
        $(this).animate({width: "100%"}, 300);
      },
      mouseleave: function(){
        $(this).animate({width: "50%"}, 500);
      }
    }); 
  }
  
    $("#github_enter").on({
      click: function(){
        $( "#home_content" ).hide("slow");
        $( "#bootstrap_content" ).hide("slow");
        $( "#node_content" ).hide("slow");
        $( "#github_content" ).show("slow");
        home_button();
        $("#github1_content").show("slow");
        $("#github2_content").hide("fast");
        $("#github3_content").hide("fast");
        $("#github4_content").hide("fast");
      }
    });
    $("#bootstrap_enter").on({
      click: function(){
        $( "#home_content" ).hide( "slow");
        $( "#github_content" ).hide( "slow");
        $( "#node_content" ).hide( "slow");
        $( "#bootstrap_content" ).show( "slow");
        home_button();
        $("#bootstrap1_content").show("slow");
        $("#bootstrap2_content").hide("slow");
        $("#bootstrap3_content").hide("slow");
      }
    });
    $("#node_enter").on({
      click: function(){
        $("#github_content").hide("slow");
        $("#home_content" ).hide("slow");
        $("#bootstrap_content").hide("slow");
        $("#node_content").show("slow");
        home_button();
        $("#node1_content").hide("slow");
        $("#node0_content").hide("slow");
        $("#node2_content").hide("slow");
        $("#node3_content").hide("slow");
        $("#node4_content").hide("slow");
        $("#node5_content").hide("slow");
        $("#node6_content").hide("slow");
        $("#nodei_content").show("slow");
      }
    });
    $("#github_1").on({
      click: function(){
        $("#github2_content").hide("fast");
        $("#github3_content").hide("fast");
        $("#github4_content").hide("fast");
        $("#github1_content").show("slow");
      }
    });
    $("#github_2").on({
      click: function(){
        $("#github1_content").hide("slow");
        $("#github3_content").hide("slow");
        $("#github4_content").hide("slow");
        $("#github2_content").show("slow");
      }
    });
    $("#github_3").on({
      click: function(){
        $("#github1_content").hide("slow");
        $("#github2_content").hide("slow");
        $("#github4_content").hide("slow");
        $("#github3_content").show("slow");
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
    $("#bootstrap_1").on({
      click: function(){
        $("#bootstrap2_content").hide("slow");
        $("#bootstrap3_content").hide("slow");
        $("#bootstrap1_content").show("slow");
      }
    });
    $("#bootstrap_2").on({
      click: function(){
        $("#bootstrap1_content").hide("slow");
        $("#bootstrap3_content").hide("slow");
        $("#bootstrap2_content").show("slow");
      }
    });
    $("#bootstrap_3").on({
      click: function(){
        $("#bootstrap1_content").hide("slow");
        $("#bootstrap2_content").hide("slow");
        $("#bootstrap3_content").show("slow");
      }
    });
    $("#node_intro").on({
      click: function(){
        $("#node0_content").hide("slow");
        $("#node1_content").hide("fast");
        $("#node2_content").hide("fast");
        $("#node3_content").hide("fast");
        $("#node4_content").hide("fast");
        $("#node5_content").hide("fast");
        $("#node6_content").hide("fast");
        $("#nodei_content").show("slow");
      }
    });
    $("#node_0").on({
      click: function(){
        $("#nodei_content").hide("slow");
        $("#node1_content").hide("fast");
        $("#node2_content").hide("fast");
        $("#node3_content").hide("fast");
        $("#node4_content").hide("fast");
        $("#node5_content").hide("fast");
        $("#node6_content").hide("fast");
        $("#node0_content").show("slow");
      }
    });
    $("#node_1").on({
      click: function(){
        $("#nodei_content").hide("slow");
        $("#node0_content").hide("fast");
        $("#node2_content").hide("fast");
        $("#node3_content").hide("fast");
        $("#node4_content").hide("fast");
        $("#node5_content").hide("fast");
        $("#node6_content").hide("fast");
        $("#node1_content").show("slow");
      }
    });
    $("#node_2").on({
      click: function(){
        $("#nodei_content").hide("slow");
        $("#node0_content").hide("fast");
        $("#node1_content").hide("fast");
        $("#node3_content").hide("fast");
        $("#node4_content").hide("fast");
        $("#node5_content").hide("fast");
        $("#node6_content").hide("fast");
        $("#node2_content").show("slow");
      }
    });
    $("#node_3").on({
      click: function(){
        $("#nodei_content").hide("slow");
        $("#node0_content").hide("fast");
        $("#node2_content").hide("fast");
        $("#node1_content").hide("fast");
        $("#node4_content").hide("fast");
        $("#node5_content").hide("fast");
        $("#node6_content").hide("fast");
        $("#node3_content").show("slow");
      }
    });
    $("#node_4").on({
      click: function(){
        $("#nodei_content").hide("slow");
        $("#node0_content").hide("fast");
        $("#node2_content").hide("fast");
        $("#node3_content").hide("fast");
        $("#node1_content").hide("fast");
        $("#node5_content").hide("fast");
        $("#node6_content").hide("fast");
        $("#node4_content").show("slow");
      }
    });
    $("#node_5").on({
      click: function(){
        $("#nodei_content").hide("slow");
        $("#node0_content").hide("fast");
        $("#node2_content").hide("fast");
        $("#node3_content").hide("fast");
        $("#node1_content").hide("fast");
        $("#node4_content").hide("fast");
        $("#node6_content").hide("fast");
        $("#node5_content").show("slow");
      }
    });
    $("#node_6").on({
      click: function(){
        $("#nodei_content").hide("slow");
        $("#node0_content").hide("fast");
        $("#node2_content").hide("fast");
        $("#node3_content").hide("fast");
        $("#node1_content").hide("fast");
        $("#node4_content").hide("fast");
        $("#node5_content").hide("fast");
        $("#node6_content").show("slow");
      }
    });
  }); 
  $( window ).on( "load", function() {
    console.log( "window loaded" );
});