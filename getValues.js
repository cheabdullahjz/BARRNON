 function getValues() {
            var rows = document.querySelectorAll("tr.package-row");
            rows.forEach(function (currentRow) {

                var FuelConsumption = Number(currentRow.querySelector('#FuelConsumption').value);
                var DistanceVal = Number(currentRow.querySelector('#DistanceVal').value);
                var inPackage = Number(currentRow.querySelector('#inPackage').value);
                var revenue = 0;

                document.querySelectorAll('numberUsed');

                if (numberUsed == "") {
                    if (isNaN(inPackage) || isNaN(price)) {
                        return;
                    }
                    revenue = price * inPackage;
                }
                else {
                    if (isNaN(numberUsed) || isNaN(price)) {
                        return;
                    }
                    revenue = price * numberUsed;
                }
                var value = revenue * 5;
                currentRow.querySelector("#revenue").innerHTML = revenue;
                currentRow.querySelector("#value").innerHTML = value;
            });

        }
