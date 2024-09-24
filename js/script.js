$(document).ready(function () {
    $("#formOne").submit(function (e) {
        e.preventDefault();

        const firstInput = $("input#first").val();
        const secondInput = $("input#second").val();
        const thirdInput = $("input#third").val();
        const fourthInput = $("input#fourth").val();
        const fifthInput = $("input#fifth").val();
        const sixthInput = $("input#sixth").val();

        const first2Input = $("input#first2").val();
        const second2Input = $("input#second2").val();
        const third2Input = $("input#third2").val();
        const fourth2Input = $("input#fourth2").val();
        const fifth2Input = $("input#fifth2").val();
        const sixth2Input = $("input#sixth2").val();

        const first3Input = $("input#first3").val();
        const second3Input = $("input#second3").val();
        const third3Input = $("input#third3").val();
        const fourth3Input = $("input#fourth3").val();
        const fifth3Input = $("input#fifth3").val();
        const sixth3Input = $("input#sixth3").val();
        const seventh3Input = $("input#seventh3").val();
        const eigth3Input = $("input#eigth3").val();
        const ninth3Input = $("input#ninth3").val();



        $(".first").html(firstInput);
        $(".second").text(secondInput);
        $(".third").text(thirdInput);
        $(".fourth").text (fourthInput);
        $(".fifth").text(fifthInput);
        $(".sixth").text(sixthInput);

        $(".first2").html(first2Input);
        $(".second2").text(second2Input);
        $(".third2").text(third2Input);
        $(".fourth2").text (fourth2Input);
        $(".fifth2").text(fifth2Input);
        $(".sixth2").text(sixth2Input);

        $(".first3").html(first3Input);
        $(".second3").text(second3Input);
        $(".third3").text(third3Input);
        $(".fourth3").text(fourth3Input)
        $(".fifth3").text(fifth3Input);
        $(".sixth3").text(sixth3Input);
        $(".seventh3").text(seventh3Input);
        $(".eigth3").text(eigth3Input);
        $(".ninth3").text(ninth3Input);

        $("#letter").show();
    });
});