var EnemyHealth : int = 15;
var TheSpider : GameObject;

function DeductPoints (DamageAmount : int) {
	EnemyHealth -= DamageAmount;
}

function Update () {
	if (EnemyHealth <= 0) {
		this.GetComponent("SpiderFollow").enabled = false;
		TheSpider.GetComponent.<Animation>().Play("die");
		EnemyHealth = 1;

	}
}

function EndSpider() {
	yield WaitForSeconds(3);
	Destroy(gameObject);
}