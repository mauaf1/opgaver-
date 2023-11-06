//SVG-elementet indsættes
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 1000)
  .attr("height", 1000);

//Vi putter en cirkel ind i SVG-elementet
svg
  .append("circle")
  .attr("id", "circle1")
  .attr("cx", 100)
  .attr("cy", 100)
  .attr("r", 50)
  .attr("fill", "#49d6d1");

  svg
  .append("circle")
  .attr("id", "circle2")
  .attr("cx", 200)
  .attr("cy", 200)
  .attr("r", 50)
  .attr("fill", "#49d6d1");

  /*
d3.selectAll("#circle1")
  //En transition begynder
  .transition()
  //duration er hvor lang tid transitionen skal tage
  .duration(2000)
  //herunder definerer vi slutværdierne for transitionen - cirklens cx rykkes således fra 100 - 600
  .attr("cx", 600)
  //Nu strater vi endnu en trasition som skal bevæge cirklen tilbage til 100
  .transition()
  //duration er hvor lang tid transitionen skal tage
  .duration(2000)
  //herunder definerer vi slutværdierne for transitionen - cirklens cx rykkes således tilbage fra 600 - 100
  .attr("cx", 300)
  .attr("cy", 300)
  //tilbage til start
  .transition()
  //duration er hvor lang tid transitionen skal tage
  .duration(2000)
  //herunder definerer vi slutværdierne for transitionen - cirklens cx rykkes således tilbage fra 600 - 100
  .attr("cx", 100)
  .attr("cy", 100);
*/

 // Havde vi haft en knap et sted på siden, kunne vi have fået animationen til at starte ved klik på knappen:
   d3.select("#klik1")
  .on("click", function () {
    d3.selectAll("#circle1")
      .transition() 
      .duration(2000)
      .attr("cx", 600)
      .transition()
      //duration er hvor lang tid transitionen skal tage
      .duration(2000)
      //herunder definerer vi slutværdierne for transitionen - cirklens cx rykkes således tilbage fra 600 - 100
      .attr("cx", 300)
      .attr("cy", 300)
      //tilbage til start
      .transition()
      //duration er hvor lang tid transitionen skal tage
      .duration(2000)
      //herunder definerer vi slutværdierne for transitionen - cirklens cx rykkes således tilbage fra 600 - 100
      .attr("cx", 100)
      .attr("cy", 100);
  });
// Bonusopgave: implementer en knap som starter animationen og få cirklens til at bevæge sig i en trekant.

d3.select("#klik2")
.on("click", function () {
  d3.selectAll("#circle2")
    .transition() 
    .duration(2000)
    .attr("cx", 800)
    .transition()
    //duration er hvor lang tid transitionen skal tage
    .duration(2000)
    //herunder definerer vi slutværdierne for transitionen - cirklens cx rykkes således tilbage fra 600 - 100
    .attr("cx", 500)
    .attr("cy", 500)
    //tilbage til start
    .transition()
    //duration er hvor lang tid transitionen skal tage
    .duration(2000)
    //herunder definerer vi slutværdierne for transitionen - cirklens cx rykkes således tilbage fra 600 - 100
    .attr("cx", 100)
    .attr("cy", 100);
});