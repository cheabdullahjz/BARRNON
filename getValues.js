 function getValues() {
            var rows = document.querySelectorAll("tr.package-row");
            rows.forEach(function (currentRow) {

                var FuelConsumption = Number(currentRow.querySelector('#FuelConsumption').value);
                var DistanceVal = Number(currentRow.querySelector('#DistanceVal').value);
                var FuelVal = Number(currentRow.querySelector('#FuelVal').value);
                var AvailableDistance = 0;

                document.querySelectorAll('numberUsed');

                AvailableDistance = FuelConsumption * DistanceVal*FuelVal;
                }


                currentRow.querySelector("#AvailableDistance").innerHTML = AvailableDistance;

            });

        }
