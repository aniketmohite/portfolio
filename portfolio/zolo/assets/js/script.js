// SHOWING / HIDING DATA RELATED TO COUNTRY 

var usa = document.getElementsByClassName("usa-data");
var canada = document.getElementsByClassName("canada-data");

// HIDE USA DATA
for(var i = 0; i < usa.length; i++) {
    usa[i].style.display = "none";
}

// SHOW AND HIDE DATA ON SELECTED COUNTRY
$(document).ready(function() {

	// SHOW HIDE COUNTRY DATA WHEN OPTION IS SELECTED
	$('#selectCountry').on('change', function(){

		if ( this.value == '1'){
			// SHOW USA DATA IF USA OPTION IS SELECTED
			for(var i = 0; i < usa.length; i++) {
				usa[i].style.display = "block";
			}
			// HIDE CANADA DATA IF USA OPTION IS SELECTED			
			for(var i = 0; i < canada.length; i++) {
				canada[i].style.display = "none";
			}			
		} else{
			// HIDE USA DATA IF CANADA OPTION IS SELECTED
			for(var i = 0; i < usa.length; i++) {
				usa[i].style.display = "none";
			}
			// SHOW CANADA DATA IF CANADA OPTION IS SELECTED
			for(var i = 0; i < canada.length; i++) {
				canada[i].style.display = "block";
			}
		}

	})

});

// ADD CLASS NAME TO ACTIVE CARD HEADER
var dataCard = document.getElementsByClassName("data-input-card");

$(dataCard).click(function(){

	if ($(this).children(".data-input-card-toggle")[0].className == "data-input-card-toggle data-input-card-toggle-active") {

		$(this).children(".data-input-card-toggle").removeClass("data-input-card-toggle-active");
		$(".data-input-card-toggle").removeClass("data-input-card-toggle-active");
		

	} else {
		$(".data-input-card-toggle").removeClass("data-input-card-toggle-active");
		$(this).children(".data-input-card-toggle").addClass("data-input-card-toggle-active");
		
	}
    
});






/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// SHOW PIE CHART SECTION

	var piechart = $(".chart-block");
	piechart.css("display","none");

	$(document).on("click", ".add-new-range-section-btn" , function() {
		piechart.css("display","flex");
	});



/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// INCOME AFTER TAX


// INCOME AFTER TAX BENCHMARK FOR USA
function IncomeBenchmarkDataUsa(category){
	var SalaryBenchmark_usa = 5155;
	var SpouseEarningBenchmark_usa = 111;
	var SideHustleBenchmark_usa = 222;
	var InvestmentIncomeBenchmark_usa = 333;
	var ChildTaxBenefitBenchmark_usa = 444;
	var SuppotPaymentsBenchmark_usa = 555;
	var RentalIncomeBenchmark_usa = 666;
	var OtherIncomeBenchmark_usa = 777;

	if (category == "salary"){
		
		return SalaryBenchmark_usa;

	} else if (category == "spouseearning"){
		
		return SpouseEarningBenchmark_usa;

	} else if (category == "sidehustle"){

		return SideHustleBenchmark_usa;		
	
	} else if (category == "investmentincome"){
	
		return InvestmentIncomeBenchmark_usa;		
	
	} else if (category == "childtaxbenefits"){
	
		return ChildTaxBenefitBenchmark_usa;		
	
	} else if (category == "supportpayments"){
	
		return SuppotPaymentsBenchmark_usa;		
	
	} else if (category == "rentalincome"){
	
		return RentalIncomeBenchmark_usa;		
	
	} else if (category == "otherincome"){
	
		return OtherIncomeBenchmark_usa;		
	
	} else {
		console.log('benchmarkData else usa');
	}
}

// INCOME AFTER TAX BENCHMARK FOR CANADA
function IncomeBenchmarkDataCanada(category){
	var SalaryBenchmark_canada = 5133;
	var SpouseEarningBenchmark_canada = 11;
	var SideHustleBenchmark_canada = 22;
	var InvestmentIncomeBenchmark_canada = 33;
	var ChildTaxBenefitBenchmark_canada = 44;
	var SuppotPaymentsBenchmark_canada = 55;
	var RentalIncomeBenchmark_canada = 66;
	var OtherIncomeBenchmark_canada = 77;

	if (category == "salary"){
		
		return SalaryBenchmark_canada;

	} else if (category == "spouseearning"){
		
		return SpouseEarningBenchmark_canada;

	} else if (category == "sidehustle"){

		return SideHustleBenchmark_canada;		
	
	} else if (category == "investmentincome"){
	
		return InvestmentIncomeBenchmark_canada;		
	
	} else if (category == "childtaxbenefits"){
	
		return ChildTaxBenefitBenchmark_canada;		
	
	} else if (category == "supportpayments"){
	
		return SuppotPaymentsBenchmark_canada;		
	
	} else if (category == "rentalincome"){
	
		return RentalIncomeBenchmark_canada;		
	
	} else if (category == "otherincome"){
	
		return OtherIncomeBenchmark_canada;		
	
	} else {
		console.log('benchmarkData else canada');
	}
}

// CALCULATE ALL INCOME SECTIONS 
function CalculateIncomeAmount(category) {

	console.log(`CALCULATED SALARY AMOUNT FUNCTION CATEGORY: ${category}`);

	if (category == "salary"){
		
		var salaryTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var salaryRangeSelected = document.getElementById(`${category}ID`).value;

		var salaryAmount = parseInt(salaryTimePeriodSelected) * parseInt(salaryRangeSelected);
		$('#salaryAmount').val(salaryAmount);
	
	} else if (category == "spouseearning"){
		
		var spouseearningTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var spouseearningRangeSelected = document.getElementById(`${category}ID`).value;

		var spouseearningAmount = parseInt(spouseearningTimePeriodSelected) * parseInt(spouseearningRangeSelected);

		$('#spouseearningAmount').val(spouseearningAmount);
	
	} else if (category == "sidehustle"){
	
		var sidehustleTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var sidehustleRangeSelected = document.getElementById(`${category}ID`).value;

		var sidehustleAmount = parseInt(sidehustleTimePeriodSelected) * parseInt(sidehustleRangeSelected);

		$('#sidehustleAmount').val(sidehustleAmount);
	
	} else if (category == "investmentincome"){
	
		var investmentincomeTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var investmentincomeRangeSelected = document.getElementById(`${category}ID`).value;

		var investmentincomeAmount = parseInt(investmentincomeTimePeriodSelected) * parseInt(investmentincomeRangeSelected);

		$('#investmentincomeAmount').val(investmentincomeAmount);
	
	} else if (category == "childtaxbenefits"){
	
		var childTaxbenefitsTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var childTaxbenefitsRangeSelected = document.getElementById(`${category}ID`).value;

		var childTaxbenefitsAmount = parseInt(childTaxbenefitsTimePeriodSelected) * parseInt(childTaxbenefitsRangeSelected);

		$('#childTaxbenefitsAmount').val(childTaxbenefitsAmount);
	
	} else if (category == "supportpayments"){
	
		var supportpaymentsTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var supportpaymentsRangeSelected = document.getElementById(`${category}ID`).value;

		var supportpaymentsAmount = parseInt(supportpaymentsTimePeriodSelected) * parseInt(supportpaymentsRangeSelected);

		$('#supportpaymentsAmount').val(supportpaymentsAmount);

	} else if (category == "rentalincome"){
	
		var rentalincomeTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var rentalincomeRangeSelected = document.getElementById(`${category}ID`).value;

		var rentalincomeAmount = parseInt(rentalincomeTimePeriodSelected) * parseInt(rentalincomeRangeSelected);

		$('#rentalincomeAmount').val(rentalincomeAmount);

	} else if (category == "otherincome"){
	
		var otherincomeTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var otherincomeRangeSelected = document.getElementById(`${category}ID`).value;

		var otherincomeAmount = parseInt(otherincomeTimePeriodSelected) * parseInt(otherincomeRangeSelected);

		$('#otherincomeAmount').val(otherincomeAmount);

	} else {
		
		console.log('else CalculateIncomeAmount(category)');
	}
}

// CALCULATE ALL INCOME SECTION ANUALLY
function CalculateTotalIncomeAmount() {

	var allincomeclasses = $(".totalincome");
	totalincome = 0;

	for(var i = 0; i < allincomeclasses.length; i++){
		totalincomeobj = $(allincomeclasses[i]).val();
		totalincomeint = parseInt(totalincomeobj);
		totalincome = totalincome + totalincomeint;
	}

	// MONTHLY INCOME
	var monthlyincome = 0;
	monthlyincome = parseInt(totalincome / 12);
	document.getElementById("monthlyincomediv").innerHTML = 
	'$<span class="semibold-text" id="monthlyincome"></span>';
	document.getElementById("monthlyincome").innerHTML = monthlyincome; 

	// ANNUAL INCOME
	document.getElementById("annualincomediv").innerHTML = 
	'Annual Take Home Income $<span class="semibold-text" id="annualincome"></span>';
	document.getElementById("annualincome").innerHTML = totalincome; 

	// TOTAL INCOME CALCULATED
	$('#totalincomecalculated').val(monthlyincome);

	// FOR REULTS TABLE
	document.getElementById("incomeaftertaxresultstable").innerHTML = '$<span id="resulttablemonthlyincome"></span>';
	document.getElementById("resulttablemonthlyincome").innerHTML = monthlyincome;	
}

// RECALCULATE ALL INCOME SECTIONS
function RecalculateIncomeAmount(category){
	console.log(`RECALCULATED INCOME AMOUNT FUNCTION CATEGORY: ${category}`);	
	CalculateIncomeAmount(category);
	CalculateTotalIncomeAmount();
	ResultTableCalculations()
}

// ADD NEW INCOME CATEGORY SECTION
$(document).ready(function(){
    $("#add_new_icome_category_btn").click(function(){
    	var selectcat = $('#income_after_tax').find(":selected").text();
    	var selectedCategoryID = $('#income_after_tax').find(":selected").val();

		// ADD BENCHMARK DATA
    	var BDataUsa = IncomeBenchmarkDataUsa(selectedCategoryID);
    	var BDataCanada = IncomeBenchmarkDataCanada(selectedCategoryID);


    	// ADD NEW RANGE SECTION
        $("#income_after_tax_data_cards").append(
        	`<li class="add-new-category-data-card">`+`
				<div class="col-md-3 add-new-category-data-card-title-section">`+`
					<div class="add-new-category-data-card-title">${selectcat}</div>`+`
					<select id="${selectedCategoryID}Select" class="add-new-category-data-card-period-section">`+`
						<option value="12">Monthly</option>`+`
						<option value="4">Quarterly</option>`+`
						<option value="2">Bi-Annually</option>`+`
					</select>`+`
				</div>`+` 
				<div class="col-md-9 add-new-category-data-card-input-section">`+`
					<div id="${selectedCategoryID}" class="range-slider add-new-category-data-card-input-card">`+`
						<div class="benchmark-container">Benchmark`+`
							<span class="country-data-benchmark">`+`
								<span class="benchmark-input-currency">$</span>`+`
								<input class="benchmark-input canada-data" value="${BDataCanada}">`+`
								<input class="benchmark-input usa-data" value="${BDataUsa}">`+`
							</span>`+`
						</div>`+`
						<input id="${selectedCategoryID}ID" class="input-range" type="range" value="0" min="0" max="10000">`+`
						<ul class="range-slider-data-points"><li>0</li><li>2k</li><li>4k</li><li>6k</li><li>8k</li><li>10k</li></ul>`+`
						<input type="number" onchange=RecalculateIncomeAmount('${selectedCategoryID}') class="range-value" value="0" />`+`
						<button id="${selectedCategoryID}addbtn" class="add-new-range-section-btn">Add</button>`+`
						<input type="number" id="${selectedCategoryID}Amount" class="totalincome" value="0" style="display:none;" />`+`
						<input type="number" id="totalincomecalculated" value="0" style="display:none;" />`+`
					</div>`+`
				</div>`+`
				<a href='javascript:void(0);' class='close-section'>&times;</a>`+`
			</li>`); 

        // var NewAddedCategory = (selectedCategoryID);
        // RecalculateIncomeAmount(NewAddedCategory);
    	
    	// INPUT RANGE SLIDER
    	range = $(`#${selectedCategoryID} > .input-range`);
		value = $(`#${selectedCategoryID} > .range-value`);


		$('.input-range').change(function () {
		    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
		    
		    $(this).css('background-image','-webkit-gradient(linear, left top, right top,'+ 'color-stop(' + val + ', #FDB725), '+ 'color-stop(' + val + ', #EBEBEB)'+ ')');

		 //    var selectedsalaryrange = this.id;
			// selectedsalaryrange = selectedsalaryrange.substring(0,selectedsalaryrange.length-2);
		    // RecalculateIncomeAmount(selectedsalaryrange);

		});

		value.val(range.attr('value'));
		
		range.on('input', function(){
			monparent=this.parentNode;
		  	value=$(monparent).find('.range-value');
		    $(value).val(this.value);
		})

		value.on('input', function(){
		    monparent=this.parentNode;
		  	range=$(monparent).find('.input-range');
		    $(range).val(this.value);
		});

		// ADD ON CLICK
		$(document).on("click", `#${selectedCategoryID}addbtn` , function() {
		    var addbtncategory = this.id;
		    console.log(addbtncategory);
		    addbtncategory = addbtncategory.substring(0,addbtncategory.length-6);
		    console.log(addbtncategory);
		    RecalculateIncomeAmount(addbtncategory);
		});
  
    });

    // CLOSE SECTIONS ON CLICK
    $(document).on("click", ".close-section" , function() {
        $(this).parent().remove();
        CalculateTotalIncomeAmount();
        ResultTableCalculations();
    });
});


	


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// DIRECT EXPENSES

// DIRECT EXPENSES BENCHMARK FOR USA
function DirectExpensesBenchmarkDataUsa(category){
	var mortgagedirectexpensesBenchmark_usa = 1030;
	var hydroelectricitydirectexpensesBenchmark_usa = 109;
	var heatingdirectexpensesBenchmark_usa = 82;
	var watersewerdirectexpensesBenchmark_usa = 40;
	var trashrecyclingdirectexpensesBenchmark_usa = 16;
	var housetenantinsurancedirectexpensesBenchmark_usa = 94;
	var emergencyfunddirectexpensesBenchmark_usa = 258;
	var maintenancedirectexpensesBenchmark_usa = 103;
	var propertytaxesdirectexpensesBenchmark_usa = 115;
	var rentdirectexpensesBenchmark_usa = 0;
	var stratahoacondofeesdirectexpensesBenchmark_usa = 200;
	var otherdirectexpensesBenchmark_usa = 0;

	if (category == "mortgage"){
		
		return mortgagedirectexpensesBenchmark_usa;

	} else if (category == "hydroelectricity"){
		
		return hydroelectricitydirectexpensesBenchmark_usa;

	} else if (category == "heating"){

		return heatingdirectexpensesBenchmark_usa;		
	
	} else if (category == "watersewer"){
	
		return watersewerdirectexpensesBenchmark_usa;		
	
	} else if (category == "trashrecycling"){
	
		return trashrecyclingdirectexpensesBenchmark_usa;		
	
	} else if (category == "housetenantinsurance"){
	
		return housetenantinsurancedirectexpensesBenchmark_usa;		
	
	} else if (category == "emergencyfund"){
	
		return emergencyfunddirectexpensesBenchmark_usa;		
	
	} else if (category == "maintenance"){
	
		return maintenancedirectexpensesBenchmark_usa;		
	
	} else if (category == "propertytaxes"){
	
		return propertytaxesdirectexpensesBenchmark_usa;		
	
	} else if (category == "rent"){
	
		return rentdirectexpensesBenchmark_usa;		
	
	} else if (category == "stratahoacondofees"){
	
		return stratahoacondofeesdirectexpensesBenchmark_usa;		
	
	} else if (category == "otherdirectexpenses"){
	
		return otherdirectexpensesBenchmark_usa;		
	
	} else {
		console.log('direct expenses benchmarkData else usa');
	}
}

// DIRECT EXPENSES BENCHMARK FOR CANADA
function DirectExpensesBenchmarkDataCanada(category){
	var mortgagedirectexpensesBenchmark_canada = 1505;
	var hydroelectricitydirectexpensesBenchmark_canada = 132;
	var heatingdirectexpensesBenchmark_canada = 116;
	var watersewerdirectexpensesBenchmark_canada = 40;
	var trashrecyclingdirectexpensesBenchmark_canada = 16;
	var housetenantinsurancedirectexpensesBenchmark_canada = 96;
	var emergencyfunddirectexpensesBenchmark_canada = 257;
	var maintenancedirectexpensesBenchmark_canada = 151;
	var propertytaxesdirectexpensesBenchmark_canada = 376;
	var rentdirectexpensesBenchmark_canada = 0;
	var stratahoacondofeesdirectexpensesBenchmark_canada = 0;
	var otherdirectexpensesBenchmark_canada = 0;

	if (category == "mortgage"){
		
		return mortgagedirectexpensesBenchmark_canada;

	} else if (category == "hydroelectricity"){
		
		return hydroelectricitydirectexpensesBenchmark_canada;

	} else if (category == "heating"){

		return heatingdirectexpensesBenchmark_canada;		
	
	} else if (category == "watersewer"){
	
		return watersewerdirectexpensesBenchmark_canada;		
	
	} else if (category == "trashrecycling"){
	
		return trashrecyclingdirectexpensesBenchmark_canada;		
	
	} else if (category == "housetenantinsurance"){
	
		return housetenantinsurancedirectexpensesBenchmark_canada;		
	
	} else if (category == "emergencyfund"){
	
		return emergencyfunddirectexpensesBenchmark_canada;		
	
	} else if (category == "maintenance"){
	
		return maintenancedirectexpensesBenchmark_canada;		
	
	} else if (category == "propertytaxes"){
	
		return propertytaxesdirectexpensesBenchmark_canada;		
	
	} else if (category == "rent"){
	
		return rentdirectexpensesBenchmark_canada;		
	
	} else if (category == "stratahoacondofees"){
	
		return stratahoacondofeesdirectexpensesBenchmark_canada;		
	
	} else if (category == "otherdirectexpenses"){
	
		return otherdirectexpensesBenchmark_canada;		
	
	} else {
		console.log('direct expenses benchmarkData else canada');
	}
}

// CALCULATE DIRECT EXPENSES SECTIONS 
function CalculateDirectExpensesAmount(category) {

	if (category == "mortgage"){
		
		var mortgageTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var mortgageRangeSelected = document.getElementById(`${category}ID`).value;

		var mortgageAmount = parseInt(mortgageTimePeriodSelected) * parseInt(mortgageRangeSelected);
		$('#mortgageAmount').val(mortgageAmount);
	
	} else if (category == "hydroelectricity"){
		
		var hydroelectricityTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var hydroelectricityRangeSelected = document.getElementById(`${category}ID`).value;

		var hydroelectricityAmount = parseInt(hydroelectricityTimePeriodSelected) * parseInt(hydroelectricityRangeSelected);

		$('#hydroelectricityAmount').val(hydroelectricityAmount);
	
	} else if (category == "heating"){
	
		var heatingTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var heatingRangeSelected = document.getElementById(`${category}ID`).value;

		var heatingAmount = parseInt(heatingTimePeriodSelected) * parseInt(heatingRangeSelected);

		$('#heatingAmount').val(heatingAmount);
	
	} else if (category == "watersewer"){
	
		var watersewerTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var watersewerRangeSelected = document.getElementById(`${category}ID`).value;

		var watersewerAmount = parseInt(watersewerTimePeriodSelected) * parseInt(watersewerRangeSelected);

		$('#watersewerAmount').val(watersewerAmount);
	
	} else if (category == "trashrecycling"){
	
		var trashrecyclingTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var trashrecyclingRangeSelected = document.getElementById(`${category}ID`).value;

		var trashrecyclingAmount = parseInt(trashrecyclingTimePeriodSelected) * parseInt(trashrecyclingRangeSelected);

		$('#trashrecyclingAmount').val(trashrecyclingAmount);
	
	} else if (category == "housetenantinsurance"){
	
		var housetenantinsuranceTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var housetenantinsuranceRangeSelected = document.getElementById(`${category}ID`).value;

		var housetenantinsuranceAmount = parseInt(housetenantinsuranceTimePeriodSelected) * parseInt(housetenantinsuranceRangeSelected);

		$('#housetenantinsuranceAmount').val(housetenantinsuranceAmount);

	} else if (category == "emergencyfund"){
	
		var emergencyfundTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var emergencyfundRangeSelected = document.getElementById(`${category}ID`).value;

		var emergencyfundAmount = parseInt(emergencyfundTimePeriodSelected) * parseInt(emergencyfundRangeSelected);

		$('#emergencyfundAmount').val(emergencyfundAmount);

	} else if (category == "maintenance"){
	
		var maintenanceTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var maintenanceRangeSelected = document.getElementById(`${category}ID`).value;

		var maintenanceAmount = parseInt(maintenanceTimePeriodSelected) * parseInt(maintenanceRangeSelected);

		$('#maintenanceAmount').val(maintenanceAmount);

	} else if (category == "propertytaxes"){
	
		var propertytaxesTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var propertytaxesRangeSelected = document.getElementById(`${category}ID`).value;

		var propertytaxesAmount = parseInt(propertytaxesTimePeriodSelected) * parseInt(propertytaxesRangeSelected);

		$('#propertytaxesAmount').val(propertytaxesAmount);

	} else if (category == "rent"){
	
		var rentTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var rentRangeSelected = document.getElementById(`${category}ID`).value;

		var rentAmount = parseInt(rentTimePeriodSelected) * parseInt(rentRangeSelected);

		$('#rentAmount').val(rentAmount);

	} else if (category == "stratahoacondofees"){
	
		var stratahoacondofeesTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var stratahoacondofeesRangeSelected = document.getElementById(`${category}ID`).value;

		var stratahoacondofeesAmount = parseInt(stratahoacondofeesTimePeriodSelected) * parseInt(stratahoacondofeesRangeSelected);

		$('#stratahoacondofeesAmount').val(stratahoacondofeesAmount);

	} else if (category == "otherdirectexpenses"){
	
		var otherdirectexpensesTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var otherdirectexpensesRangeSelected = document.getElementById(`${category}ID`).value;

		var otherdirectexpensesAmount = parseInt(otherdirectexpensesTimePeriodSelected) * parseInt(otherdirectexpensesRangeSelected);

		$('#otherdirectexpensesAmount').val(otherdirectexpensesAmount);

	} else {
		
		console.log('else CalculateDirectExpensesAmount(category)');
	}
}

// CALCULATE ALL DIRECT EXPENSES SECTION ANUALLY
function CalculateTotalDirectExpensesAmount() {

	var alldirectexpensesclasses = $(".totaldirectexpenses");
	totaldirectexpenses = 0;

	for(var i = 0; i < alldirectexpensesclasses.length; i++){
		totaldirectexpensesobj = $(alldirectexpensesclasses[i]).val();
		totaldirectexpensesint = parseInt(totaldirectexpensesobj);
		totaldirectexpenses = totaldirectexpenses + totaldirectexpensesint;
	}

	// MONTHLY INCOME
	var monthlydirectexpenses = 0;
	monthlydirectexpenses = parseInt(totaldirectexpenses / 12);
	document.getElementById("monthlydirectexpensesdiv").innerHTML = 
	'<div class="data-input-card-toggle-title">$<span class="semibold-text" id="monthlydirectexpenses"></span></div><div class="data-input-card-toggle-subtitle text-align-right">Monthly</div>';
	document.getElementById("monthlydirectexpenses").innerHTML = monthlydirectexpenses; 

	// TOTAL DIRECT EXPENSES CALCULATED
	$('#totaldirectexpensescalculated').val(monthlydirectexpenses);

	// FOR REULTS TABLE
	document.getElementById("directexpensesresulttable").innerHTML = '$<span id="resulttablemonthlydirectexpenses"></span>';
	document.getElementById("resulttablemonthlydirectexpenses").innerHTML = monthlydirectexpenses;	
}

// RECALCULATE ALL DIRECT EXPENSES SECTIONS
function RecalculateDirectExpensesAmount(category){
	CalculateDirectExpensesAmount(category);
	CalculateTotalDirectExpensesAmount();
	ResultTableCalculations()
}

// ADD NEW DIRECT EXPENSES CATEGORY SECTION
$(document).ready(function(){
    $("#add_new_direct_expense_category_btn").click(function(){
    	var selectcat = $('#direct_expenses').find(":selected").text();
    	var selectedCategoryID = $('#direct_expenses').find(":selected").val();

		// ADD BENCHMARK DATA
    	var BDataUsa = DirectExpensesBenchmarkDataUsa(selectedCategoryID);
    	var BDataCanada = DirectExpensesBenchmarkDataCanada(selectedCategoryID);


    	// ADD NEW RANGE SECTION
        $("#direct_expenses_data_cards").append(
        	`<li class="add-new-category-data-card">`+`
				<div class="col-md-3 add-new-category-data-card-title-section">`+`
					<div class="add-new-category-data-card-title">${selectcat}</div>`+`
					<select id="${selectedCategoryID}Select" class="add-new-category-data-card-period-section">`+`
						<option value="12">Monthly</option>`+`
						<option value="4">Quarterly</option>`+`
						<option value="2">Bi-Annually</option>`+`
					</select>`+`
				</div>`+` 
				<div class="col-md-9 add-new-category-data-card-input-section">`+`
					<div id="${selectedCategoryID}" class="range-slider add-new-category-data-card-input-card">`+`
						<div class="benchmark-container">Benchmark`+`
							<span class="country-data-benchmark">`+`
								<span class="benchmark-input-currency">$</span>`+`
								<input class="benchmark-input canada-data" value="${BDataCanada}">`+`
								<input class="benchmark-input usa-data" value="${BDataUsa}">`+`
							</span>`+`
						</div>`+`
						<input id="${selectedCategoryID}ID" class="input-range" type="range" value="0" min="0" max="10000">`+`
						<ul class="range-slider-data-points"><li>0</li><li>2k</li><li>4k</li><li>6k</li><li>8k</li><li>10k</li></ul>`+`
						<input type="number" onchange=RecalculateDirectExpensesAmount('${selectedCategoryID}') class="range-value" value="0" />`+`
						<button id="${selectedCategoryID}addbtn" class="add-new-range-section-btn direct-expenses-theme-btn">Add</button>`+`
						<input type="number" id="${selectedCategoryID}Amount" class="totaldirectexpenses" value="0" style="display:none;" />`+`
						<input type="number" id="totaldirectexpensescalculated" value="0" style="display:none;" />`+`
					</div>`+`
				</div>`+`
				<a href='javascript:void(0);' class='close-section'>&times;</a>`+`
			</li>`); 

        // var NewAddedCategory = (selectedCategoryID);
        // RecalculateDirectExpensesAmount(NewAddedCategory);
    	
    	// INPUT RANGE SLIDER
    	range = $(`#${selectedCategoryID} > .input-range`);
		value = $(`#${selectedCategoryID} > .range-value`);


		$('.input-range').change(function () {
		    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
		    
		    $(this).css('background-image','-webkit-gradient(linear, left top, right top,'+ 'color-stop(' + val + ', #FDB725), '+ 'color-stop(' + val + ', #EBEBEB)'+ ')');

		 //    var selectedrange = this.id;
			// selectedrange = selectedrange.substring(0,selectedrange.length-2);
		 //    RecalculateDirectExpensesAmount(selectedrange);

		});

		value.val(range.attr('value'));
		
		range.on('input', function(){
			monparent=this.parentNode;
		  	value=$(monparent).find('.range-value');
		    $(value).val(this.value);
		})

		value.on('input', function(){
		    monparent=this.parentNode;
		  	range=$(monparent).find('.input-range');
		    $(range).val(this.value);
		});

		// ADD ON CLICK
		$(document).on("click", `#${selectedCategoryID}addbtn` , function() {
		    var addbtncategory = this.id;
		    console.log(addbtncategory);
		    addbtncategory = addbtncategory.substring(0,addbtncategory.length-6);
		    console.log(addbtncategory);
		    RecalculateDirectExpensesAmount(addbtncategory);
		});


  
    });

    // CLOSE SECTIONS ON CLICK
    $(document).on("click", ".close-section" , function() {
        $(this).parent().remove();
        CalculateTotalDirectExpensesAmount();
        ResultTableCalculations();
    });
});





/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// DIRECT EXPENSES DIY OPTIONS

// DIRECT EXPENSES DIY OPTIONS BENCHMARK FOR USA
function DirectExpensesDIYOptionsBenchmarkDataUsa(category){
	var sumppumpinspectiondirectexpensesBenchmark_usa = 17;
	var lawnandgardenmaintenancedirectexpensesBenchmark_usa = 133;
	var snowremovaldirectexpensesBenchmark_usa = 42;
	var gutterandeavestroughcleaningdirectexpensesBenchmark_usa = 26;
	var chimneyorfireboxcleaningdirectexpensesBenchmark_usa = 21;
	var furnacefiltersdirectexpensesBenchmark_usa = 7;
	var furnaceandhotwatertankinspectiondirectexpensesBenchmark_usa = 4;
	var heatpumphrvoracinspectiondirectexpensesBenchmark_usa = 4;
	var septicwellcoststestsandmaintenancedirectexpensesBenchmark_usa = 16;
	var otherdirectexpensesdiyoptionsdirectexpensesBenchmark_usa = 0;

	if (category == "sumppumpinspection"){
		
		return sumppumpinspectiondirectexpensesBenchmark_usa;

	} else if (category == "lawnandgardenmaintenance"){
		
		return lawnandgardenmaintenancedirectexpensesBenchmark_usa;

	} else if (category == "snowremoval"){

		return snowremovaldirectexpensesBenchmark_usa;		
	
	} else if (category == "gutterandeavestroughcleaning"){
	
		return gutterandeavestroughcleaningdirectexpensesBenchmark_usa;		
	
	} else if (category == "chimneyorfireboxcleaning"){
	
		return chimneyorfireboxcleaningdirectexpensesBenchmark_usa;		
	
	} else if (category == "furnacefilters"){
	
		return furnacefiltersdirectexpensesBenchmark_usa;		
	
	} else if (category == "furnaceandhotwatertankinspection"){
	
		return furnaceandhotwatertankinspectiondirectexpensesBenchmark_usa;		
	
	} else if (category == "heatpumphrvoracinspection"){
	
		return heatpumphrvoracinspectiondirectexpensesBenchmark_usa;		
	
	} else if (category == "septicwellcoststestsandmaintenance"){
	
		return septicwellcoststestsandmaintenancedirectexpensesBenchmark_usa;		
	
	} else if (category == "otherdirectexpensesdiyoptions"){
	
		return otherdirectexpensesdiyoptionsdirectexpensesBenchmark_usa;		
	
	} else {
		console.log('direct expenses DIY options benchmarkData else usa');
	}
}

// DIRECT EXPENSES DIY OPTIONS BENCHMARK FOR CANADA
function DirectExpensesDIYOptionsBenchmarkDataCanada(category){
	var sumppumpinspectiondirectexpensesBenchmark_canada = 42;
	var lawnandgardenmaintenancedirectexpensesBenchmark_canada = 140;
	var snowremovaldirectexpensesBenchmark_canada = 42;
	var gutterandeavestroughcleaningdirectexpensesBenchmark_canada = 38;
	var chimneyorfireboxcleaningdirectexpensesBenchmark_canada = 21;
	var furnacefiltersdirectexpensesBenchmark_canada = 7;
	var furnaceandhotwatertankinspectiondirectexpensesBenchmark_canada = 10;
	var heatpumphrvoracinspectiondirectexpensesBenchmark_canada = 21;
	var septicwellcoststestsandmaintenancedirectexpensesBenchmark_canada = 15;
	var otherdirectexpensesdiyoptionsdirectexpensesBenchmark_canada = 0;

	if (category == "sumppumpinspection"){
		
		return sumppumpinspectiondirectexpensesBenchmark_canada;

	} else if (category == "lawnandgardenmaintenance"){
		
		return lawnandgardenmaintenancedirectexpensesBenchmark_canada;

	} else if (category == "snowremoval"){

		return snowremovaldirectexpensesBenchmark_canada;		
	
	} else if (category == "gutterandeavestroughcleaning"){
	
		return gutterandeavestroughcleaningdirectexpensesBenchmark_canada;		
	
	} else if (category == "chimneyorfireboxcleaning"){
	
		return chimneyorfireboxcleaningdirectexpensesBenchmark_canada;		
	
	} else if (category == "furnacefilters"){
	
		return furnacefiltersdirectexpensesBenchmark_canada;		
	
	} else if (category == "furnaceandhotwatertankinspection"){
	
		return furnaceandhotwatertankinspectiondirectexpensesBenchmark_canada;		
	
	} else if (category == "heatpumphrvoracinspection"){
	
		return heatpumphrvoracinspectiondirectexpensesBenchmark_canada;		
	
	} else if (category == "septicwellcoststestsandmaintenance"){
	
		return septicwellcoststestsandmaintenancedirectexpensesBenchmark_canada;		
	
	} else if (category == "otherdirectexpensesdiyoptions"){
	
		return otherdirectexpensesdiyoptionsdirectexpensesBenchmark_canada;		
	
	} else {
		console.log('direct expenses diy options benchmarkData else canada');
	}
}

// CALCULATE DIRECT EXPENSES DIY OPTIONS SECTIONS 
function CalculateDirectExpensesDIYOptionsAmount(category) {

	if (category == "sumppumpinspection"){
		
		var sumppumpinspectionTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var sumppumpinspectionRangeSelected = document.getElementById(`${category}ID`).value;

		var sumppumpinspectionAmount = parseInt(sumppumpinspectionTimePeriodSelected) * parseInt(sumppumpinspectionRangeSelected);
		$('#sumppumpinspectionAmount').val(sumppumpinspectionAmount);
	
	} else if (category == "lawnandgardenmaintenance"){
		
		var lawnandgardenmaintenanceTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var lawnandgardenmaintenanceRangeSelected = document.getElementById(`${category}ID`).value;

		var lawnandgardenmaintenanceAmount = parseInt(lawnandgardenmaintenanceTimePeriodSelected) * parseInt(lawnandgardenmaintenanceRangeSelected);

		$('#lawnandgardenmaintenanceAmount').val(lawnandgardenmaintenanceAmount);
	
	} else if (category == "snowremoval"){
	
		var snowremovalTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var snowremovalRangeSelected = document.getElementById(`${category}ID`).value;

		var snowremovalAmount = parseInt(snowremovalTimePeriodSelected) * parseInt(snowremovalRangeSelected);

		$('#snowremovalAmount').val(snowremovalAmount);
	
	} else if (category == "gutterandeavestroughcleaning"){
	
		var gutterandeavestroughcleaningTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var gutterandeavestroughcleaningRangeSelected = document.getElementById(`${category}ID`).value;

		var gutterandeavestroughcleaningAmount = parseInt(gutterandeavestroughcleaningTimePeriodSelected) * parseInt(gutterandeavestroughcleaningRangeSelected);

		$('#gutterandeavestroughcleaningAmount').val(gutterandeavestroughcleaningAmount);
	
	} else if (category == "chimneyorfireboxcleaning"){
	
		var chimneyorfireboxcleaningTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var chimneyorfireboxcleaningRangeSelected = document.getElementById(`${category}ID`).value;

		var chimneyorfireboxcleaningAmount = parseInt(chimneyorfireboxcleaningTimePeriodSelected) * parseInt(chimneyorfireboxcleaningRangeSelected);

		$('#chimneyorfireboxcleaningAmount').val(chimneyorfireboxcleaningAmount);
	
	} else if (category == "furnacefilters"){
	
		var furnacefiltersTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var furnacefiltersRangeSelected = document.getElementById(`${category}ID`).value;

		var furnacefiltersAmount = parseInt(furnacefiltersTimePeriodSelected) * parseInt(furnacefiltersRangeSelected);

		$('#furnacefiltersAmount').val(furnacefiltersAmount);

	} else if (category == "furnaceandhotwatertankinspection"){
	
		var furnaceandhotwatertankinspectionTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var furnaceandhotwatertankinspectionRangeSelected = document.getElementById(`${category}ID`).value;

		var furnaceandhotwatertankinspectionAmount = parseInt(furnaceandhotwatertankinspectionTimePeriodSelected) * parseInt(furnaceandhotwatertankinspectionRangeSelected);

		$('#furnaceandhotwatertankinspectionAmount').val(furnaceandhotwatertankinspectionAmount);

	} else if (category == "heatpumphrvoracinspection"){
	
		var heatpumphrvoracinspectionTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var heatpumphrvoracinspectionRangeSelected = document.getElementById(`${category}ID`).value;

		var heatpumphrvoracinspectionAmount = parseInt(heatpumphrvoracinspectionTimePeriodSelected) * parseInt(heatpumphrvoracinspectionRangeSelected);

		$('#heatpumphrvoracinspectionAmount').val(heatpumphrvoracinspectionAmount);

	} else if (category == "septicwellcoststestsandmaintenance"){
	
		var septicwellcoststestsandmaintenanceTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var septicwellcoststestsandmaintenanceRangeSelected = document.getElementById(`${category}ID`).value;

		var septicwellcoststestsandmaintenanceAmount = parseInt(septicwellcoststestsandmaintenanceTimePeriodSelected) * parseInt(septicwellcoststestsandmaintenanceRangeSelected);

		$('#septicwellcoststestsandmaintenanceAmount').val(septicwellcoststestsandmaintenanceAmount);

	} else if (category == "otherdirectexpensesdiyoptions"){
	
		var otherdirectexpensesdiyoptionsTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var otherdirectexpensesdiyoptionsRangeSelected = document.getElementById(`${category}ID`).value;

		var otherdirectexpensesdiyoptionsAmount = parseInt(otherdirectexpensesdiyoptionsTimePeriodSelected) * parseInt(otherdirectexpensesdiyoptionsRangeSelected);

		$('#otherdirectexpensesdiyoptionsAmount').val(otherdirectexpensesdiyoptionsAmount);

	}  else {
		
		console.log('else CalculateDirectExpensesDIYOptionsAmount(category)');
	}
}

// CALCULATE ALL DIRECT EXPENSES DIY OPTIONS SECTION ANUALLY
function CalculateTotalDirectExpensesDIYOptionsAmount() {

	var alldirectexpensesdiyoptionsclasses = $(".totaldirectexpensesdiyoptions");
	totaldirectexpensesdiyoptions = 0;

	for(var i = 0; i < alldirectexpensesdiyoptionsclasses.length; i++){
		totaldirectexpensesdiyoptionsobj = $(alldirectexpensesdiyoptionsclasses[i]).val();
		totaldirectexpensesdiyoptionsint = parseInt(totaldirectexpensesdiyoptionsobj);
		totaldirectexpensesdiyoptions = totaldirectexpensesdiyoptions + totaldirectexpensesdiyoptionsint;
	}

	// MONTHLY INCOME
	var monthlydirectexpensesdiyoptions = 0;
	monthlydirectexpensesdiyoptions = parseInt(totaldirectexpensesdiyoptions / 12);
	document.getElementById("monthlydirectexpensesdiyoptionsdiv").innerHTML = 
	'<div class="data-input-card-toggle-title">$<span class="semibold-text" id="monthlydirectexpensesdiyoptions"></span></div><div class="data-input-card-toggle-subtitle text-align-right">Monthly</div>';
	document.getElementById("monthlydirectexpensesdiyoptions").innerHTML = monthlydirectexpensesdiyoptions; 

	// TOTAL DIRECT EXPENSES CALCULATED
	$('#totaldirectexpensesdiyoptionscalculated').val(monthlydirectexpensesdiyoptions);


	// FOR REULTS TABLE
	document.getElementById("directexpensesdiyoptionsresulttable").innerHTML = '$<span id="resulttablemonthlydirectexpensesdiyoptions"></span>';
	document.getElementById("resulttablemonthlydirectexpensesdiyoptions").innerHTML = monthlydirectexpensesdiyoptions;	
}

// RECALCULATE ALL DIRECT EXPENSES DIY OPTIONS SECTIONS
function RecalculateDirectExpensesDIYOptionsAmount(category){
	CalculateDirectExpensesDIYOptionsAmount(category);
	CalculateTotalDirectExpensesDIYOptionsAmount();
	ResultTableCalculations()
}

// ADD NEW DIRECT EXPENSES DIY OPTIONS CATEGORY SECTION
$(document).ready(function(){
    $("#add_new_direct_expenses_diy_options_category_btn").click(function(){
    	var selectcat = $('#direct_expenses_diy_options').find(":selected").text();
    	var selectedCategoryID = $('#direct_expenses_diy_options').find(":selected").val();

		// ADD BENCHMARK DATA
    	var BDataUsa = DirectExpensesDIYOptionsBenchmarkDataUsa(selectedCategoryID);
    	var BDataCanada = DirectExpensesDIYOptionsBenchmarkDataCanada(selectedCategoryID);


    	// ADD NEW RANGE SECTION
        $("#direct_expenses_diy_options_data_cards").append(
        	`<li class="add-new-category-data-card">`+`
				<div class="col-md-3 add-new-category-data-card-title-section">`+`
					<div class="add-new-category-data-card-title">${selectcat}</div>`+`
					<select id="${selectedCategoryID}Select" class="add-new-category-data-card-period-section">`+`
						<option value="12">Monthly</option>`+`
						<option value="4">Quarterly</option>`+`
						<option value="2">Bi-Annually</option>`+`
					</select>`+`
				</div>`+` 
				<div class="col-md-9 add-new-category-data-card-input-section">`+`
					<div id="${selectedCategoryID}" class="range-slider add-new-category-data-card-input-card">`+`
						<div class="benchmark-container">Benchmark`+`
							<span class="country-data-benchmark">`+`
								<span class="benchmark-input-currency">$</span>`+`
								<input class="benchmark-input canada-data" value="${BDataCanada}">`+`
								<input class="benchmark-input usa-data" value="${BDataUsa}">`+`
							</span>`+`
						</div>`+`
						<input id="${selectedCategoryID}ID" class="input-range" type="range" value="0" min="0" max="10000">`+`
						<ul class="range-slider-data-points"><li>0</li><li>2k</li><li>4k</li><li>6k</li><li>8k</li><li>10k</li></ul>`+`
						<input type="number" onchange=RecalculateDirectExpensesDIYOptionsAmount('${selectedCategoryID}') class="range-value" value="0" />`+`
						<button id="${selectedCategoryID}addbtn" class="add-new-range-section-btn direct-expenses-diy-theme-btn">Add</button>`+`
						<input type="number" id="${selectedCategoryID}Amount" class="totaldirectexpensesdiyoptions" value="0" style="display:none;" />`+`
						<input type="number" id="totaldirectexpensesdiyoptionscalculated" value="0" style="display:none;" />`+`
					</div>`+`
				</div>`+`
				<a href='javascript:void(0);' class='close-section'>&times;</a>`+`
			</li>`); 

        // var NewAddedCategory = (selectedCategoryID);
        // RecalculateDirectExpensesDIYOptionsAmount(NewAddedCategory);
    	
    	// INPUT RANGE SLIDER
    	range = $(`#${selectedCategoryID} > .input-range`);
		value = $(`#${selectedCategoryID} > .range-value`);


		$('.input-range').change(function () {
		    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
		    
		    $(this).css('background-image','-webkit-gradient(linear, left top, right top,'+ 'color-stop(' + val + ', #008FD5), '+ 'color-stop(' + val + ', #EBEBEB)'+ ')');

		 //    var selectedrange = this.id;
			// selectedrange = selectedrange.substring(0,selectedrange.length-2);
		 //    RecalculateDirectExpensesDIYOptionsAmount(selectedrange);

		});

		value.val(range.attr('value'));
		
		range.on('input', function(){
			monparent=this.parentNode;
		  	value=$(monparent).find('.range-value');
		    $(value).val(this.value);
		})

		value.on('input', function(){
		    monparent=this.parentNode;
		  	range=$(monparent).find('.input-range');
		    $(range).val(this.value);
		});

		// ADD ON CLICK
		$(document).on("click", `#${selectedCategoryID}addbtn` , function() {
		    var addbtncategory = this.id;
		    console.log(addbtncategory);
		    addbtncategory = addbtncategory.substring(0,addbtncategory.length-6);
		    console.log(addbtncategory);
		    RecalculateDirectExpensesDIYOptionsAmount(addbtncategory);
		});
  
    });

    // CLOSE SECTIONS ON CLICK
    $(document).on("click", ".close-section" , function() {
        $(this).parent().remove();
        CalculateTotalDirectExpensesDIYOptionsAmount();
        ResultTableCalculations();
    });
});






/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// INDIRECT EXPENSES

// DIRECT EXPENSES BENCHMARK FOR USA
function InDirectExpensesBenchmarkDataUsa(category){
	var housingcleaningsuppliesBenchmark_usa = 67;
	var pestcontrolBenchmark_usa = 25;
	var deckandffencemaintenanceBenchmark_usa = 58;
	var lightbulbsincandescentBenchmark_usa = 2;
	var lightbulbsledBenchmark_usa = 2;
	var batteriessmokeandcarbonmonoxidedetectorsBenchmark_usa = 3;
	var otherindirectexpensesBenchmark_usa = 0;

	if (category == "housingcleaningsupplies"){
		
		return housingcleaningsuppliesBenchmark_usa;

	} else if (category == "pestcontrol"){
		
		return pestcontrolBenchmark_usa;

	} else if (category == "deckandffencemaintenance"){

		return deckandffencemaintenanceBenchmark_usa;		
	
	} else if (category == "lightbulbsincandescent"){
	
		return lightbulbsincandescentBenchmark_usa;		
	
	} else if (category == "lightbulbsled"){
	
		return lightbulbsledBenchmark_usa;		
	
	} else if (category == "batteriessmokeandcarbonmonoxidedetectors"){
	
		return batteriessmokeandcarbonmonoxidedetectorsBenchmark_usa;		
	
	} else if (category == "otherindirectexpenses"){
	
		return otherindirectexpensesBenchmark_usa;		
	
	}  else {
		console.log('indirect expenses benchmarkData else usa');
	}
}

// DIRECT EXPENSES BENCHMARK FOR CANADA
function InDirectExpensesBenchmarkDataCanada(category){
	var housingcleaningsuppliesBenchmark_canada = 18;
	var pestcontrolBenchmark_canada = 59;
	var deckandffencemaintenanceBenchmark_canada = 58;
	var lightbulbsincandescentBenchmark_canada = 3;
	var lightbulbsledBenchmark_canada = 5;
	var batteriessmokeandcarbonmonoxidedetectorsBenchmark_canada = 3;
	var otherindirectexpensesBenchmark_canada = 0;

	if (category == "housingcleaningsupplies"){
		
		return housingcleaningsuppliesBenchmark_canada;

	} else if (category == "pestcontrol"){
		
		return pestcontrolBenchmark_canada;

	} else if (category == "deckandffencemaintenance"){

		return deckandffencemaintenanceBenchmark_canada;		
	
	} else if (category == "lightbulbsincandescent"){
	
		return lightbulbsincandescentBenchmark_canada;		
	
	} else if (category == "lightbulbsled"){
	
		return lightbulbsledBenchmark_canada;		
	
	} else if (category == "batteriessmokeandcarbonmonoxidedetectors"){
	
		return batteriessmokeandcarbonmonoxidedetectorsBenchmark_canada;		
	
	} else if (category == "otherindirectexpenses"){
	
		return otherindirectexpensesBenchmark_canada;		
	
	}  else {
		console.log('indirect expenses benchmarkData else canada');
	}
}

// CALCULATE DIRECT EXPENSES SECTIONS 
function CalculateInDirectExpensesAmount(category) {
	if (category == "housingcleaningsupplies"){
		
		var housingcleaningsuppliesTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var housingcleaningsuppliesRangeSelected = document.getElementById(`${category}ID`).value;

		var housingcleaningsuppliesAmount = parseInt(housingcleaningsuppliesTimePeriodSelected) * parseInt(housingcleaningsuppliesRangeSelected);
		$('#housingcleaningsuppliesAmount').val(housingcleaningsuppliesAmount);
	
	} else if (category == "pestcontrol"){
		
		var pestcontrolTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var pestcontrolRangeSelected = document.getElementById(`${category}ID`).value;

		var pestcontrolAmount = parseInt(pestcontrolTimePeriodSelected) * parseInt(pestcontrolRangeSelected);

		$('#pestcontrolAmount').val(pestcontrolAmount);
	
	} else if (category == "deckandffencemaintenance"){
	
		var deckandffencemaintenanceTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var deckandffencemaintenanceRangeSelected = document.getElementById(`${category}ID`).value;

		var deckandffencemaintenanceAmount = parseInt(deckandffencemaintenanceTimePeriodSelected) * parseInt(deckandffencemaintenanceRangeSelected);

		$('#deckandffencemaintenanceAmount').val(deckandffencemaintenanceAmount);
	
	} else if (category == "lightbulbsincandescent"){
	
		var lightbulbsincandescentTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var lightbulbsincandescentRangeSelected = document.getElementById(`${category}ID`).value;

		var lightbulbsincandescentAmount = parseInt(lightbulbsincandescentTimePeriodSelected) * parseInt(lightbulbsincandescentRangeSelected);

		$('#lightbulbsincandescentAmount').val(lightbulbsincandescentAmount);
	
	} else if (category == "lightbulbsled"){
	
		var lightbulbsledTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var lightbulbsledRangeSelected = document.getElementById(`${category}ID`).value;

		var lightbulbsledAmount = parseInt(lightbulbsledTimePeriodSelected) * parseInt(lightbulbsledRangeSelected);

		$('#lightbulbsledAmount').val(lightbulbsledAmount);
	
	} else if (category == "batteriessmokeandcarbonmonoxidedetectors"){
	
		var batteriessmokeandcarbonmonoxidedetectorsTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var batteriessmokeandcarbonmonoxidedetectorsRangeSelected = document.getElementById(`${category}ID`).value;

		var batteriessmokeandcarbonmonoxidedetectorsAmount = parseInt(batteriessmokeandcarbonmonoxidedetectorsTimePeriodSelected) * parseInt(batteriessmokeandcarbonmonoxidedetectorsRangeSelected);

		$('#batteriessmokeandcarbonmonoxidedetectorsAmount').val(batteriessmokeandcarbonmonoxidedetectorsAmount);

	} else if (category == "otherindirectexpenses"){
	
		var otherindirectexpensesTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var otherindirectexpensesRangeSelected = document.getElementById(`${category}ID`).value;

		var otherindirectexpensesAmount = parseInt(otherindirectexpensesTimePeriodSelected) * parseInt(otherindirectexpensesRangeSelected);

		$('#otherindirectexpensesAmount').val(otherindirectexpensesAmount);

	} else {
		
		console.log('else CalculateDirectExpensesAmount(category)');
	}
}

// CALCULATE ALL DIRECT EXPENSES SECTION ANUALLY
function CalculateTotalInDirectExpensesAmount() {

	var allindirectexpensesclasses = $(".totalindirectexpenses");
	totalindirectexpenses = 0;

	for(var i = 0; i < allindirectexpensesclasses.length; i++){
		totalindirectexpensesobj = $(allindirectexpensesclasses[i]).val();
		totalindirectexpensesint = parseInt(totalindirectexpensesobj);
		totalindirectexpenses = totalindirectexpenses + totalindirectexpensesint;
	}

	// MONTHLY INCOME
	var monthlyindirectexpenses = 0;
	monthlyindirectexpenses = parseInt(totalindirectexpenses / 12);
	document.getElementById("monthlyindirectexpensesdiv").innerHTML = 
	'<div class="data-input-card-toggle-title">$<span class="semibold-text" id="monthlyindirectexpenses"></span></div><div class="data-input-card-toggle-subtitle text-align-right">Monthly</div>';
	document.getElementById("monthlyindirectexpenses").innerHTML = monthlyindirectexpenses; 

	// TOTAL INDIRECT EXPENSES CALCULATED
	$('#totalindirectexpensescalculated').val(monthlyindirectexpenses);


	// FOR REULTS TABLE
	document.getElementById("indirectexpensesresulttable").innerHTML = '$<span id="resulttablemonthlyindirectexpenses"></span>';
	document.getElementById("resulttablemonthlyindirectexpenses").innerHTML = monthlyindirectexpenses;	
}

// RECALCULATE ALL DIRECT EXPENSES SECTIONS
function RecalculateInDirectExpensesAmount(category){	
	CalculateInDirectExpensesAmount(category);
	CalculateTotalInDirectExpensesAmount();
	ResultTableCalculations()
}

// ADD NEW DIRECT EXPENSES CATEGORY SECTION
$(document).ready(function(){
    $("#add_new_indirect_expense_category_btn").click(function(){
    	var selectcat = $('#indirect_expenses').find(":selected").text();
    	var selectedCategoryID = $('#indirect_expenses').find(":selected").val();

		// ADD BENCHMARK DATA
    	var BDataUsa = InDirectExpensesBenchmarkDataUsa(selectedCategoryID);
    	var BDataCanada = InDirectExpensesBenchmarkDataCanada(selectedCategoryID);


    	// ADD NEW RANGE SECTION
        $("#indirect_expenses_data_cards").append(
        	`<li class="add-new-category-data-card">`+`
				<div class="col-md-3 add-new-category-data-card-title-section">`+`
					<div class="add-new-category-data-card-title">${selectcat}</div>`+`
					<select id="${selectedCategoryID}Select" class="add-new-category-data-card-period-section">`+`
						<option value="12">Monthly</option>`+`
						<option value="4">Quarterly</option>`+`
						<option value="2">Bi-Annually</option>`+`
					</select>`+`
				</div>`+` 
				<div class="col-md-9 add-new-category-data-card-input-section">`+`
					<div id="${selectedCategoryID}" class="range-slider add-new-category-data-card-input-card">`+`
						<div class="benchmark-container">Benchmark`+`
							<span class="country-data-benchmark">`+`
								<span class="benchmark-input-currency">$</span>`+`
								<input class="benchmark-input canada-data" value="${BDataCanada}">`+`
								<input class="benchmark-input usa-data" value="${BDataUsa}">`+`
							</span>`+`
						</div>`+`
						<input id="${selectedCategoryID}ID" class="input-range" type="range" value="0" min="0" max="10000">`+`
						<ul class="range-slider-data-points"><li>0</li><li>2k</li><li>4k</li><li>6k</li><li>8k</li><li>10k</li></ul>`+`
						<input type="number" onchange=RecalculateInDirectExpensesAmount('${selectedCategoryID}') class="range-value" value="0" />`+`
						<button id="${selectedCategoryID}addbtn" class="add-new-range-section-btn indirect-expenses-theme-btn">Add</button>`+`
						<input type="number" id="${selectedCategoryID}Amount" class="totalindirectexpenses" value="0" style="display:none;" />`+`
						<input type="number" id="totalindirectexpensescalculated" value="0" style="display:none;" />`+`
					</div>`+`
				</div>`+`
				<a href='javascript:void(0);' class='close-section'>&times;</a>`+`
			</li>`); 

        // var NewAddedCategory = (selectedCategoryID);
        // RecalculateInDirectExpensesAmount(NewAddedCategory);
    	
    	// INPUT RANGE SLIDER
    	range = $(`#${selectedCategoryID} > .input-range`);
		value = $(`#${selectedCategoryID} > .range-value`);


		$('.input-range').change(function () {
		    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
		    
		    $(this).css('background-image','-webkit-gradient(linear, left top, right top,'+ 'color-stop(' + val + ', #282828), '+ 'color-stop(' + val + ', #EBEBEB)'+ ')');

		 //    var selectedrange = this.id;
			// selectedrange = selectedrange.substring(0,selectedrange.length-2);
		 //    RecalculateInDirectExpensesAmount(selectedrange);

		});

		value.val(range.attr('value'));
		
		range.on('input', function(){
			monparent=this.parentNode;
		  	value=$(monparent).find('.range-value');
		    $(value).val(this.value);
		})

		value.on('input', function(){
		    monparent=this.parentNode;
		  	range=$(monparent).find('.input-range');
		    $(range).val(this.value);
		});

		// ADD ON CLICK
		$(document).on("click", `#${selectedCategoryID}addbtn` , function() {
		    var addbtncategory = this.id;
		    console.log(addbtncategory);
		    addbtncategory = addbtncategory.substring(0,addbtncategory.length-6);
		    console.log(addbtncategory);
		    RecalculateInDirectExpensesAmount(addbtncategory);
		});
  
    });

    // CLOSE SECTIONS ON CLICK
    $(document).on("click", ".close-section" , function() {
        $(this).parent().remove();
        CalculateTotalInDirectExpensesAmount();
        ResultTableCalculations();
    });
});






/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// DISCRETIONARY EXPENSES

// DISCRETIONARY EXPENSES BENCHMARK FOR USA
function DiscretionaryExpensesBenchmarkDataUsa(category){
	var homephonehardlineBenchmark_usa = 42;
	var subscriptioncostcabletvsatelliteBenchmark_usa = 54;
	var subscriptioncostnetflixstreamingvideosBenchmark_usa = 14;
	var subscriptioncostgamingtBenchmark_usa = 10;
	var subscriptioncostmusicBenchmark_usa = 10;
	var internetBenchmark_usa = 66;
	var cleaningserviceBenchmark_usa = 167;
	var homesecurityalarmsystemBenchmark_usa = 48;
	var propanebbqtankfirstpurchaseBenchmark_usa = 4;
	var bbqpropanerefillsBenchmark_usa = 6;
	var firewoodBenchmark_usa = 15;
	var poolheaterandpumpandfilterinspectionBenchmark_usa = 21;
	var otherdiscretionaryexpensesBenchmark_usa = 0;

	if (category == "homephonehardline"){
		
		return homephonehardlineBenchmark_usa;

	} else if (category == "subscriptioncostcabletvsatellite"){
		
		return subscriptioncostcabletvsatelliteBenchmark_usa;

	} else if (category == "subscriptioncostnetflixstreamingvideos"){

		return subscriptioncostnetflixstreamingvideosBenchmark_usa;		
	
	} else if (category == "subscriptioncostgaming"){
	
		return subscriptioncostgamingtBenchmark_usa;		
	
	} else if (category == "subscriptioncostmusic"){
	
		return subscriptioncostmusicBenchmark_usa;		
	
	} else if (category == "internet"){
	
		return internetBenchmark_usa;		
	
	} else if (category == "cleaningservice"){
	
		return cleaningserviceBenchmark_usa;		
	
	} else if (category == "homesecurityalarmsystem"){
	
		return homesecurityalarmsystemBenchmark_usa;		
	
	} else if (category == "propanebbqtankfirstpurchase"){
	
		return propanebbqtankfirstpurchaseBenchmark_usa;		
	
	} else if (category == "bbqpropanerefills"){
	
		return bbqpropanerefillsBenchmark_usa;		
	
	} else if (category == "firewood"){
	
		return firewoodBenchmark_usa;		
	
	} else if (category == "poolheaterandpumpandfilterinspection"){
	
		return poolheaterandpumpandfilterinspectionBenchmark_usa;		
	
	} else if (category == "otherdiscretionaryexpenses"){
	
		return otherdiscretionaryexpensesBenchmark_usa;		
	
	}  else {
		console.log('discretionary expenses benchmarkData else usa');
	}
}

// DISCRETIONARY EXPENSES BENCHMARK FOR CANADA
function DiscretionaryExpensesBenchmarkDataCanada(category){
	var homephonehardlineBenchmark_canada = 28;
	var subscriptioncostcabletvsatelliteBenchmark_canada = 54;
	var subscriptioncostnetflixstreamingvideosBenchmark_canada = 14;
	var subscriptioncostgamingtBenchmark_canada = 10;
	var subscriptioncostmusicBenchmark_canada = 10;
	var internetBenchmark_canada = 55;
	var cleaningserviceBenchmark_canada = 187;
	var homesecurityalarmsystemBenchmark_canada = 25;
	var propanebbqtankfirstpurchaseBenchmark_canada = 4;
	var bbqpropanerefillsBenchmark_canada = 6;
	var firewoodBenchmark_canada = 36;
	var poolheaterandpumpandfilterinspectionBenchmark_canada = 36;
	var otherdiscretionaryexpensesBenchmark_canada = 0;

	if (category == "homephonehardline"){
		
		return homephonehardlineBenchmark_canada;

	} else if (category == "subscriptioncostcabletvsatellite"){
		
		return subscriptioncostcabletvsatelliteBenchmark_canada;

	} else if (category == "subscriptioncostnetflixstreamingvideos"){

		return subscriptioncostnetflixstreamingvideosBenchmark_canada;		
	
	} else if (category == "subscriptioncostgaming"){
	
		return subscriptioncostgamingtBenchmark_canada;		
	
	} else if (category == "subscriptioncostmusic"){
	
		return subscriptioncostmusicBenchmark_canada;		
	
	} else if (category == "internet"){
	
		return internetBenchmark_canada;		
	
	} else if (category == "cleaningservice"){
	
		return cleaningserviceBenchmark_canada;		
	
	} else if (category == "homesecurityalarmsystem"){
	
		return homesecurityalarmsystemBenchmark_canada;		
	
	} else if (category == "propanebbqtankfirstpurchase"){
	
		return propanebbqtankfirstpurchaseBenchmark_canada;		
	
	} else if (category == "bbqpropanerefills"){
	
		return bbqpropanerefillsBenchmark_canada;		
	
	} else if (category == "firewood"){
	
		return firewoodBenchmark_canada;		
	
	} else if (category == "poolheaterandpumpandfilterinspection"){
	
		return poolheaterandpumpandfilterinspectionBenchmark_canada;		
	
	} else if (category == "otherdiscretionaryexpenses"){
	
		return otherdiscretionaryexpensesBenchmark_canada;		
	
	}  else {
		console.log('discretionary expenses benchmarkData else usa');
	}
}

// CALCULATE DISCRETIONARY EXPENSES SECTIONS 
function CalculateDiscretionaryExpensesAmount(category) {

	if (category == "homephonehardline"){
		
		var homephonehardlineTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var homephonehardlineRangeSelected = document.getElementById(`${category}ID`).value;

		var homephonehardlineAmount = parseInt(homephonehardlineTimePeriodSelected) * parseInt(homephonehardlineRangeSelected);

		$('#homephonehardlineAmount').val(homephonehardlineAmount);
	
	} else if (category == "subscriptioncostcabletvsatellite"){
		
		var subscriptioncostcabletvsatelliteTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var subscriptioncostcabletvsatelliteRangeSelected = document.getElementById(`${category}ID`).value;

		var subscriptioncostcabletvsatelliteAmount = parseInt(subscriptioncostcabletvsatelliteTimePeriodSelected) * parseInt(subscriptioncostcabletvsatelliteRangeSelected);
		
		$('#subscriptioncostcabletvsatelliteAmount').val(subscriptioncostcabletvsatelliteAmount);
	
	} else if (category == "subscriptioncostnetflixstreamingvideos"){
	
		var subscriptioncostnetflixstreamingvideosTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var subscriptioncostnetflixstreamingvideosRangeSelected = document.getElementById(`${category}ID`).value;

		var subscriptioncostnetflixstreamingvideosAmount = parseInt(subscriptioncostnetflixstreamingvideosTimePeriodSelected) * parseInt(subscriptioncostnetflixstreamingvideosRangeSelected);

		$('#subscriptioncostnetflixstreamingvideosAmount').val(subscriptioncostnetflixstreamingvideosAmount);
	
	} else if (category == "subscriptioncostgaming"){
	
		var subscriptioncostgamingTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var subscriptioncostgamingRangeSelected = document.getElementById(`${category}ID`).value;

		var subscriptioncostgamingAmount = parseInt(subscriptioncostgamingTimePeriodSelected) * parseInt(subscriptioncostgamingRangeSelected);

		$('#subscriptioncostgamingAmount').val(subscriptioncostgamingAmount);
	
	} else if (category == "subscriptioncostmusic"){
	
		var subscriptioncostmusicTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var subscriptioncostmusicRangeSelected = document.getElementById(`${category}ID`).value;

		var subscriptioncostmusicAmount = parseInt(subscriptioncostmusicTimePeriodSelected) * parseInt(subscriptioncostmusicRangeSelected);

		$('#subscriptioncostmusicAmount').val(subscriptioncostmusicAmount);
	
	} else if (category == "internet"){
	
		var internetTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var internetRangeSelected = document.getElementById(`${category}ID`).value;

		var internetAmount = parseInt(internetTimePeriodSelected) * parseInt(internetRangeSelected);

		$('#internetAmount').val(internetAmount);

	} else if (category == "cleaningservice"){
	
		var cleaningserviceTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var cleaningserviceRangeSelected = document.getElementById(`${category}ID`).value;

		var cleaningserviceAmount = parseInt(cleaningserviceTimePeriodSelected) * parseInt(cleaningserviceRangeSelected);

		$('#cleaningserviceAmount').val(cleaningserviceAmount);

	} else if (category == "homesecurityalarmsystem"){
	
		var homesecurityalarmsystemTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var homesecurityalarmsystemRangeSelected = document.getElementById(`${category}ID`).value;

		var homesecurityalarmsystemAmount = parseInt(homesecurityalarmsystemTimePeriodSelected) * parseInt(homesecurityalarmsystemRangeSelected);

		$('#homesecurityalarmsystemAmount').val(homesecurityalarmsystemAmount);

	} else if (category == "propanebbqtankfirstpurchase"){
	
		var propanebbqtankfirstpurchaseTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var propanebbqtankfirstpurchaseRangeSelected = document.getElementById(`${category}ID`).value;

		var propanebbqtankfirstpurchaseAmount = parseInt(propanebbqtankfirstpurchaseTimePeriodSelected) * parseInt(propanebbqtankfirstpurchaseRangeSelected);

		$('#propanebbqtankfirstpurchaseAmount').val(propanebbqtankfirstpurchaseAmount);

	} else if (category == "bbqpropanerefills"){
	
		var bbqpropanerefillsTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var bbqpropanerefillsRangeSelected = document.getElementById(`${category}ID`).value;

		var bbqpropanerefillsAmount = parseInt(bbqpropanerefillsTimePeriodSelected) * parseInt(bbqpropanerefillsRangeSelected);

		$('#bbqpropanerefillsAmount').val(bbqpropanerefillsAmount);

	} else if (category == "firewood"){
	
		var firewoodTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var firewoodRangeSelected = document.getElementById(`${category}ID`).value;

		var firewoodAmount = parseInt(firewoodTimePeriodSelected) * parseInt(firewoodRangeSelected);

		$('#firewoodAmount').val(firewoodAmount);

	} else if (category == "poolheaterandpumpandfilterinspection"){
	
		var poolheaterandpumpandfilterinspectionTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var poolheaterandpumpandfilterinspectionRangeSelected = document.getElementById(`${category}ID`).value;

		var poolheaterandpumpandfilterinspectionAmount = parseInt(poolheaterandpumpandfilterinspectionTimePeriodSelected) * parseInt(poolheaterandpumpandfilterinspectionRangeSelected);

		$('#poolheaterandpumpandfilterinspectionAmount').val(poolheaterandpumpandfilterinspectionAmount);

	} else if (category == "otherdiscretionaryexpenses"){
	
		var otherdiscretionaryexpensesTimePeriodSelected = document.getElementById(`${category}Select`).value;
		var otherdiscretionaryexpensesRangeSelected = document.getElementById(`${category}ID`).value;

		var otherdiscretionaryexpensesAmount = parseInt(otherdiscretionaryexpensesTimePeriodSelected) * parseInt(otherdiscretionaryexpensesRangeSelected);

		$('#otherdiscretionaryexpensesAmount').val(otherdiscretionaryexpensesAmount);

	} else {
		
		console.log('else CalculateDiscretionaryExpensesAmount(category)');
	}
}

// CALCULATE ALL DIRDISCRETIONARYECT EXPENSES SECTION ANUALLY
function CalculateTotalDiscretionaryExpensesAmount() {

	var alldiscretionaryexpensesclasses = $(".totaldiscretionaryexpenses");
	totaldiscretionaryexpenses = 0;
	for(var i = 0; i < alldiscretionaryexpensesclasses.length; i++){
		totaldiscretionaryexpensesobj = $(alldiscretionaryexpensesclasses[i]).val();
		totaldiscretionaryexpensesint = parseInt(totaldiscretionaryexpensesobj);
		totaldiscretionaryexpenses = totaldiscretionaryexpenses + totaldiscretionaryexpensesint;
	}

	// MONTHLY INCOME
	var monthlydiscretionaryexpenses = 0;
	monthlydiscretionaryexpenses = parseInt(totaldiscretionaryexpenses / 12);
	document.getElementById("monthlydiscretionaryexpensesdiv").innerHTML = 
	'<div class="data-input-card-toggle-title">$<span class="semibold-text" id="monthlydiscretionaryexpenses"></span></div><div class="data-input-card-toggle-subtitle text-align-right">Monthly</div>';
	document.getElementById("monthlydiscretionaryexpenses").innerHTML = monthlydiscretionaryexpenses; 

	// TOTAL DISCRETIONARY EXPENSES CALCULATED
	$('#totaldiscretionaryexpensescalculated').val(monthlydiscretionaryexpenses);


	// FOR REULTS TABLE
	document.getElementById("discretionaryexpensesresulttable").innerHTML = '$<span id="resulttablemonthlydiscretionaryexpenses"></span>';
	document.getElementById("resulttablemonthlydiscretionaryexpenses").innerHTML = monthlydiscretionaryexpenses;	
}

// RECALCULATE ALL DIRECT EXPENSES SECTIONS
function RecalculateDiscretionaryExpensesAmount(category){

	CalculateDiscretionaryExpensesAmount(category);
	CalculateTotalDiscretionaryExpensesAmount();
	ResultTableCalculations()
}

// ADD NEW DISCRETIONARY EXPENSES CATEGORY SECTION
$(document).ready(function(){
    $("#add_new_discretionary_expense_category_btn").click(function(){
    	var selectcat = $('#discretionary_expenses').find(":selected").text();
    	var selectedCategoryID = $('#discretionary_expenses').find(":selected").val();

		// ADD BENCHMARK DATA
    	var BDataUsa = DiscretionaryExpensesBenchmarkDataUsa(selectedCategoryID);
    	var BDataCanada = DiscretionaryExpensesBenchmarkDataCanada(selectedCategoryID);


    	// ADD NEW RANGE SECTION
        $("#discretionary_expenses_data_cards").append(
        	`<li class="add-new-category-data-card">`+`
				<div class="col-md-3 add-new-category-data-card-title-section">`+`
					<div class="add-new-category-data-card-title">${selectcat}</div>`+`
					<select id="${selectedCategoryID}Select" class="add-new-category-data-card-period-section">`+`
						<option value="12">Monthly</option>`+`
						<option value="4">Quarterly</option>`+`
						<option value="2">Bi-Annually</option>`+`
					</select>`+`
				</div>`+` 
				<div class="col-md-9 add-new-category-data-card-input-section">`+`
					<div id="${selectedCategoryID}" class="range-slider add-new-category-data-card-input-card">`+`
						<div class="benchmark-container">Benchmark`+`
							<span class="country-data-benchmark">`+`
								<span class="benchmark-input-currency">$</span>`+`
								<input class="benchmark-input canada-data" value="${BDataCanada}">`+`
								<input class="benchmark-input usa-data" value="${BDataUsa}">`+`
							</span>`+`
						</div>`+`
						<input id="${selectedCategoryID}ID" class="input-range" type="range" value="0" min="0" max="10000">`+`
						<ul class="range-slider-data-points"><li>0</li><li>2k</li><li>4k</li><li>6k</li><li>8k</li><li>10k</li></ul>`+`
						<input type="number" onchange=RecalculateDiscretionaryExpensesAmount('${selectedCategoryID}') class="range-value" value="0" />`+`
						<button id="${selectedCategoryID}addbtn" class="add-new-range-section-btn discretionary-expenses-theme-btn">Add</button>`+`
						<input type="number" id="${selectedCategoryID}Amount" class="totaldiscretionaryexpenses" value="0" style="display:none;" />`+`
						<input type="number" id="totaldiscretionaryexpensescalculated" value="0" style="display:none;" />`+`
					</div>`+`
				</div>`+`
				<a href='javascript:void(0);' class='close-section'>&times;</a>`+`
			</li>`); 

        // var NewAddedCategory = (selectedCategoryID);
        // RecalculateDiscretionaryExpensesAmount(NewAddedCategory);
    	
    	// INPUT RANGE SLIDER
    	range = $(`#${selectedCategoryID} > .input-range`);
		value = $(`#${selectedCategoryID} > .range-value`);


		$('.input-range').change(function () {
		    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
		    
		    $(this).css('background-image','-webkit-gradient(linear, left top, right top,'+ 'color-stop(' + val + ', #48B6E2), '+ 'color-stop(' + val + ', #EBEBEB)'+ ')');

		 //    var selectedrange = this.id;
			// selectedrange = selectedrange.substring(0,selectedrange.length-2);
		 //    RecalculateDiscretionaryExpensesAmount(selectedrange);

		});

		value.val(range.attr('value'));
		
		range.on('input', function(){
			monparent=this.parentNode;
		  	value=$(monparent).find('.range-value');
		    $(value).val(this.value);
		})

		value.on('input', function(){
		    monparent=this.parentNode;
		  	range=$(monparent).find('.input-range');
		    $(range).val(this.value);
		});

		// ADD ON CLICK
		$(document).on("click", `#${selectedCategoryID}addbtn` , function() {
		    var addbtncategory = this.id;
		    console.log(addbtncategory);
		    addbtncategory = addbtncategory.substring(0,addbtncategory.length-6);
		    console.log(addbtncategory);
		    RecalculateDiscretionaryExpensesAmount(addbtncategory);
		});
  
    });

    // CLOSE SECTIONS ON CLICK
    $(document).on("click", ".close-section" , function() {
        $(this).parent().remove();
        CalculateTotalDiscretionaryExpensesAmount();
        ResultTableCalculations();
    });
});


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// CALCULATE TOTAL EXPENSES


function ResultTableCalculations(){

	var totalincomecalc = 0;
	var totaldirectexpensescalc = 0;
	var totaldirectexpensesdiyopcalc = 0;
	var totalindirectexpensescalc = 0;
	var totaldiscetionaryexpensescalc = 0;

	var totalexpenses = 0;
	var incomeleftafterhousing = 0;

	var directexpensesperc = 0;
	var directexpensesdiyoptperc = 0;
	var indirectexpensesperc = 0;
	var discretionaryperc = 0;
	var totalexpensesperc = 0;
	var incomeleftafterhousingperc = 0;

	var totalincomecalc = $('#totalincomecalculated');
	var totaldirectexpensescalc = $('#totaldirectexpensescalculated');
	var totaldirectexpensesdiyopcalc = $('#totaldirectexpensesdiyoptionscalculated');
	var totalindirectexpensescalc = $('#totalindirectexpensescalculated');
	var totaldiscetionaryexpensescalc = $('#totaldiscretionaryexpensescalculated');

	totalincomecalc = parseInt(totalincomecalc.val());
	if(totalincomecalc >= 0){
		totalincomecalc = totalincomecalc;
	} else{
		totalincomecalc = 0;
	}

	totaldirectexpensescalc = parseInt(totaldirectexpensescalc.val());
	if(totaldirectexpensescalc >= 0){
		totaldirectexpensescalc = totaldirectexpensescalc;
	} else{
		totaldirectexpensescalc = 0;
	}

	totaldirectexpensesdiyopcalc = parseInt(totaldirectexpensesdiyopcalc.val());
	if(totaldirectexpensesdiyopcalc >= 0){
		totaldirectexpensesdiyopcalc = totaldirectexpensesdiyopcalc;
	} else{
		totaldirectexpensesdiyopcalc = 0;
	}

	totalindirectexpensescalc = parseInt(totalindirectexpensescalc.val());
	if(totalindirectexpensescalc >= 0){
		totalindirectexpensescalc = totalindirectexpensescalc;
	} else{
		totalindirectexpensescalc = 0;
	}

	totaldiscetionaryexpensescalc = parseInt(totaldiscetionaryexpensescalc.val());
	if(totaldiscetionaryexpensescalc >= 0){
		totaldiscetionaryexpensescalc = totaldiscetionaryexpensescalc;
	} else{
		totaldiscetionaryexpensescalc = 0;
	}

	// TOTAL EXPENSES
	totalexpenses = totaldirectexpensescalc + totaldirectexpensesdiyopcalc + totalindirectexpensescalc + totaldiscetionaryexpensescalc;

	// FOR TOTAL EXPENSES AT REULTS TABLE
	document.getElementById("totalexpensesresultstable").innerHTML = '$<span id="totalexpensesresultstableamount"></span>';
	document.getElementById("totalexpensesresultstableamount").innerHTML = totalexpenses;	

	// FOR TOTAL EXPENSES AT REULTS HEADER
	document.getElementById("totalexpensesresultsheader").innerHTML = '$<span id="totalexpensesresultsheaderamount"></span>';
	document.getElementById("totalexpensesresultsheaderamount").innerHTML = totalexpenses;	

	// INCOME LEFT AFTER HOUSING EXPENSES
	incomeleftafterhousing = totalincomecalc - totalexpenses;

	// FOR TOTAL EXPENSES AT REULTS TABLE
	document.getElementById("incomeleftafterexpensesresultstable").innerHTML = '$<span id="incomeleftafterexpensesresultstableamount"></span>';
	document.getElementById("incomeleftafterexpensesresultstableamount").innerHTML = incomeleftafterhousing;	

	// FOR TOTAL EXPENSES AT REULTS HEADER
	document.getElementById("incomeaftertaxresultsheader").innerHTML = '$<span id="incomeaftertaxresultsheaderamount"></span>';
	document.getElementById("incomeaftertaxresultsheaderamount").innerHTML = incomeleftafterhousing;	

	// DIRECT EXPENSE %
	directexpensesperc = ((totaldirectexpensescalc/totalincomecalc)*100);
	directexpensesperc = parseFloat(directexpensesperc);
	directexpensesperc = directexpensesperc.toFixed(2);

	document.getElementById("directexpensesbudgetallocation").innerHTML = '<span id="directexpensesbudgetallocationpercentage"></span>%';
	document.getElementById("directexpensesbudgetallocationpercentage").innerHTML = directexpensesperc;

	// DIRECT EXPENSE DIY OPTIONS %
	directexpensesdiyoptperc = ((totaldirectexpensesdiyopcalc/totalincomecalc)*100);
	directexpensesdiyoptperc = parseFloat(directexpensesdiyoptperc);
	directexpensesdiyoptperc = directexpensesdiyoptperc.toFixed(2);

	document.getElementById("directexpensesdiyoptionsbudgetallocation").innerHTML = '<span id="directexpensesdiyoptionsbudgetallocationpercentage"></span>%';
	document.getElementById("directexpensesdiyoptionsbudgetallocationpercentage").innerHTML = directexpensesdiyoptperc;

	// INDIRECT EXPENSE %
	indirectexpensesperc = ((totalindirectexpensescalc/totalincomecalc)*100);
	indirectexpensesperc = parseFloat(indirectexpensesperc);
	indirectexpensesperc = indirectexpensesperc.toFixed(2);

	document.getElementById("indirectexpensesbudgetallocation").innerHTML = '<span id="indirectexpensesbudgetallocationpercentage"></span>%';
	document.getElementById("indirectexpensesbudgetallocationpercentage").innerHTML = indirectexpensesperc;

	// INDIRECT EXPENSE %
	discretionaryperc = ((totaldiscetionaryexpensescalc/totalincomecalc)*100);
	discretionaryperc = parseFloat(discretionaryperc);
	discretionaryperc = discretionaryperc.toFixed(2);

	document.getElementById("discretionaryexpensesbudgetallocation").innerHTML = '<span id="discretionaryexpensesbudgetallocationpercentage"></span>%';
	document.getElementById("discretionaryexpensesbudgetallocationpercentage").innerHTML = discretionaryperc;

	// TOTAL EXPENSES %
	totalexpensesperc = ((totalexpenses/totalincomecalc)*100);
	totalexpensesperc = parseFloat(totalexpensesperc);
	totalexpensesperc = totalexpensesperc.toFixed(2);

	document.getElementById("totalexpensespercentageresultstable").innerHTML = '<span id="totalexpensespercentageresultstablepercentage"></span>%';
	document.getElementById("totalexpensespercentageresultstablepercentage").innerHTML = totalexpensesperc;

	// TOTAL EXPENSES %
	incomeleftafterhousingperc = ((incomeleftafterhousing/totalincomecalc)*100);
	incomeleftafterhousingperc = parseFloat(incomeleftafterhousingperc);
	incomeleftafterhousingperc = incomeleftafterhousingperc.toFixed(2);

	document.getElementById("incomeleftafterexpensespercentageresultstable").innerHTML = '<span id="incomeleftafterexpensespercentageresultstablepercentage"></span>%';
	document.getElementById("incomeleftafterexpensespercentageresultstablepercentage").innerHTML = incomeleftafterhousingperc;


	// PIE CHART
	// let piechartlabels = ['Income After Tax','Direct Expenses','Direct Expenses DIY Options','Indirect Expenses','Discretionary Expenses']
	let piechartdata = [incomeleftafterhousingperc, directexpensesperc, directexpensesdiyoptperc, discretionaryperc, indirectexpensesperc];
 	let piechartcolors = ['#FDB725','#008FD5','#F36F21','#48B6E2','#282828'];

    const ctx = document.getElementById('housingchart').getContext('2d');
    let housingchart = new Chart(ctx,{
    
      type:'pie',
      data: {
   		// labels : piechartlabels,
        datasets : [
          {

            data : piechartdata,
            backgroundColor:piechartcolors,
          }
        ]},

        options: {
		    tooltips: {
		         enabled: false
		    },
		    hover: {mode: null},

		    plugins: {
		        labels: {
				    render: 'percentage',
				    fontSize: 16,
				    fontColor: '#fff',
				    fontStyle: 'normal',
				    position: 'default',	
				    precision: 2
				}
		    }

		}
    
    });

 

}